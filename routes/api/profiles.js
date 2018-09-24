const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile  and user models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route     GET api/profiles/test
// @desc      Tests profile route
// @access    Public
router.get('/test', (req, res) => res.json({msg: "Profiles Works"}));


// @route     GET api/profiles/test
// @desc      Tests profile route
// @access    Public

module.exports = router;