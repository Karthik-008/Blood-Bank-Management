const Donor = require('../Models/donor');

// add a donor
const addDonor = async(req, res) => {
    try{
        const donor = new Donor(req.body);
        await donor.save();

        res.status(201).json({message: 'Donor Added', donor: donor});
    }catch(error) {
        res.status(500).json({message: 'Error adding donor', error: error.message});
    }
};

// fetch the donors
const getDonors = async(req, res) => {
    try{
        const donors = await Donor.find();
        if(donors.length == 0) {
            res.status(404).json({message: 'No Donors in DB'});
        }
        else {
            res.status(200).json({message: 'Fetched Donors', donors: donors});
        }
    }catch(error) {
        res.status(500).json({message: 'Error fetching donors', error: error.message});
    }
};

// update a donor
const updateDonor = async(req, res) => {
    try{
        const resp = await Donor.findOneAndUpdate({"DonorID":req.body.DonorID}, {$set: req.body}, {new: true});
        
        res.status(200).json({message: 'Donor Updated!', donor: resp});
    }catch(error) {
        res.status(500).json({message: 'Error updating donor', error: error.message});
    }
};

// delete a donor
const deleteDonor = async(req, res) => {
    try{
        const donor = await Donor.findOneAndDelete({"DonorID": req.params.id});
        if(!donor) {
            res.status(404).json({message: 'Donor not found'});
        }
        res.status(200).json({message: 'Donor Deleted', donor: donor});
    }catch(error) {
        res.status(500).json({message: 'Error deleting!', error: error.message});
    }
};

module.exports = {
    addDonor,
    getDonors,
    updateDonor,
    deleteDonor,
}