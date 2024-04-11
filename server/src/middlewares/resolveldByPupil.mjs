import { pupils }from "../utils/constants.mjs"

export const resolveIndexByPupilId = (req, res, next) => {
    const {params: {id},} = req;
    const findPupilIndex = pupils.findIndex(pupil => pupil.id === id);
    if(findPupilIndex === -1) return res.sendStatus(404);

    req.findPupilIndex = findPupilIndex;

    next()
}