// TESTS BUG #6: Test case to catch the bug in authUser middleware
it('should handle invalid JWT token', () => {
	const req = {
	  body: { _token: 'invalid_token' },
	  query: {}
	};
	const res = {};
	const next = jest.fn(); // Mock next function
  
	authUser(req, res, next);
  
	// Check that next function was called with an error
	expect(next).toHaveBeenCalledWith(expect.any(Error));
	expect(next.mock.calls[0][0].status).toBe(401);
  });

  // FIXES BUG #1: Handle invalid JWT token in authUser middleware
function authUser(req, res, next) {
	try {
	  const token = req.body._token || req.query._token;
	  if (!token) {
		throw new Error('No token provided');
	  }
  
	  let payload = jwt.decode(token);
	  if (!payload) {
		throw new Error('Invalid token');
	  }
  
	  req.curr_username = payload.username;
	  req.curr_admin = payload.admin;
	  return next();
	} catch (err) {
	  console.error('Authentication error:', err.message);
	  err.status = 401; // Set status code for error
	  return next(err);
	}
  }
  