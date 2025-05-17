const User=require('../models/student');
exports.getProfileData = async (req, res) => {
  try {
    // The user ID is available in req.user.id from the token
    const userId = req.user.id;
    console.log(userId);
    // Fetch profile data for this specific user
    const profileData = await User.findById(userId).select('-password'); // Exclude password
    
    if (!profileData) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(profileData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}