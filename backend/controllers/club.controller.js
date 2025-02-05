import { Club } from "../models/club.model.js";


export const registerClub = async (req, res) => {
    try {
        const { clubName } = req.body;
        if (!clubName) {
            return res.status(400).json({
                message: "Club name is required.",
                success: false
            });
        }
        let club = await Club.findOne({ name: clubName });
        if (club) {
            return res.status(400).json({
                message: "You can't register same club.",
                success: false
            })
        };
        club = await Club.create({
            name: clubName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Club registered successfully.",
            club,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getClub = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const clubs = await Club.find({ userId });
        if (!clubs) {
            return res.status(404).json({
                message: "Clubs not found.",
                success: false
            })
        }
        return res.status(200).json({
            clubs,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// get company by id
export const getClubById = async (req, res) => {
    try {
        const clubId = req.params.id;
        const club = await Club.findById(clubId);
        if (!club) {
            return res.status(404).json({
                message: "Club not found.",
                success: false
            })
        }
        return res.status(200).json({
            club,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateClub = async (req, res) => {
    try {
        const { name, description, website, clubl } = req.body;
 
        const file = req.file;
        // idhar cloudinary ayega
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const logo = cloudResponse.secure_url;
    
        const updateData = { name, description, website, clubl};

        const club = await Club.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!club) {
            return res.status(404).json({
                message: "Club not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Club information updated.",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}