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
    displayName: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: 'Mentor display name must be at least 3 characters with a max of 32 characters',
        },
        notEmpty: false,
        isString: {
            errorMessage: 'Mentor display name must a string'
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
    displayName: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage:'Mentor username must be at least 3 characters with a max of 32 characters',

        },
        notEmpty: false,
        isString: {
            errorMessage: 'Mentor display name be a string'
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

