var router = require('express').Router()

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

module.exports = function (passport) {

	//google routes
	router.get("/", function (req, res) {
		console.log("In /:");
		res.send();
	})

	router.get('/login/google',
		passport.authenticate('google', { scope: ['profile'] }),
		function (req,res) {
			res.redirect('/home');
		}
	);

	router.get('/login/google/cb',
		passport.authenticate('google', { scope: ['profile'] }),
		function (req,res) {
			res.redirect('/home');
		}
	);

	router.get('/home',
		ensureLoggedIn('/'),
		//passport.authenticate('google', { scope: ['profile'] }, { failureRedirect: '/' }),
		function (req, res) {
			console.log("User logged in: ", req.user.id);
			//console.log("User Logged In. User:", req.user,"query:", req.query)
			res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
			//res.redirect('/testgoogleuser');
		}
	);



	// //use this route to test the user
	// router.get('/testgoogleuser',
	// 	//passport.authenticate('google'),
	// 	ensureLoggedIn('/login/google'),

	// 	function (req, res) {
	// 		console.log("getting google user", req.user);

	// 		res.json({ success: (req.user ? "Yes" : "No"), user: req.user });
	// 		console.log("Done getting test user");

	// 	}
	// );

	router.get('/logout',


		function (req, res) {
			const old_user = req.user;
			req.logout();

			res.json({ success: (req.user ? "No" : "Yes"), user: req.user, "old_user": old_user });
		});

	return router;

}

