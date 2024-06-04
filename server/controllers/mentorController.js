const mentorService = require('../services/mentorService')

exports.createMentor = async (req, res) => {
    const {username, firstname, lastname, phone, route} = req.body;
    try{
        const mentor = await mentorService.createMentor(username, firstname, lastname, phone, route)
        res.status(200).json({ mentor });
    }catch (error) {
  res.status(400).json({ error: error.message})
    }
};

exports.getMentor = async (req,res) => {
    const { id } = req.params;
    try{
        const mentor = await mentorService.getMentor(id);
        if (!mentor) return res.status(404).json({message: 'Mentor not found'});
        res.status(200).json({mentor});
    }catch (error){
     res.status(400).json({error:error.message})
    }
}

exports.updateMentor = async (req,res) => {
    const { id } = req.params;
    const {username, firstname, lastname, phone, route} = req.body
    try{
        const findMentor = await mentorService.getMentor(id);
        if(!findMentor) return res.status(404).json({ message: 'Mentor not found'});
        findMentor.username = username || findMentor.username;
        findMentor.firstname = firstname || findMentor.firstname;
        findMentor.lastname = lastname || findMentor.lastname;
        findMentor.phone = phone || findMentor.phone;
        findMentor.route = route || findMentor.route;
        
        await findMentor.save();
        res.status(200).json({ mentor: findMentor});

    }catch (error) {
        res.status(400).json({error:error.message})
    }
}

exports.deleteMentor = async (req,res) => {
    const { id } = req.params;
    try {
        await mentorService.deleteMentor(id);
        res.status(200).json({message: 'Mentor deleted succesfully'});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}