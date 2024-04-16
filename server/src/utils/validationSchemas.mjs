export const createValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
        errorMessage: 'Mentor username must be at least 3 characters with a max of 32 characters',
        },
        notEmpty: {
            errorMessage: 'Mentor username cannot be empty',
        },
        isString: {
            errorMessage: 'Mentor username must be a string'
        }
    },
   
    phoneNumber: {
        notEmpty: true,
        isString: false 
     },
     password: {
        isLength: {
            options:{
                min:8
            },
            errorMessage: "Password must be at least 8 characters"
        },
        notEmpty:{
            errorMessage:"Password cannot be empty"
        },
        isString: {
            errorMessage: "Password mast be at string"
        }
     }
}

export const updateValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
        errorMessage: 'Mentor username must be at least 3 characters with a max of 32 characters',
        },
        notEmpty: false,
        isString: {
            errorMessage: 'Mentor username must be a string'
        }
    },
     phoneNumber: {
        notEmpty: false,
        isString: false,
    },
}

export const loginValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
        errorMessage: 'Mentor username must be at least 3 characters with a max of 32 characters',
        },
        notEmpty: {
            errorMessage:'Mentor username cannot be empty',
        },
        isString: {
            errorMessage: 'Mentor username must be a string'
        }    
    },
    password: {
        notEmpty: true,
    }
}

export const createPupilValidationSchema = {
    fullInfo: {
        isString: {
            errorMessage: "Pupil name and lastName info must be a string"
        },
        notEmpty: {
            errorMessage: "Pupil fullname info cannot be empty"
        },
    },
    phoneNumber: {
        isString: {
           errorMessage: 'Phone number must be a string'
        },
        notEmpty: {
            errorMessage: 'Phone number cannot be empty'
        },
    },
    coin: {
        isString: false,
    },
    lessonTime: {
        isString: true,
        notEmpty: true,
    },
    lessonDays: {
        isString: true,
        notEmpty: true,
    },
    status: {
        isString: true,
        notEmpty: true,
    },
};

