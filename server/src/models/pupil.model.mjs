import { Schema, model } from "mongoose";

const PupilSchema = new Schema ({
  fullInfo: {
    type: Schema.Types.String,
    required: true,
  },
  phoneNumber: {
    type: Schema.Types.String,
    required: true,
  },
  coin: {
    type: Schema.Types.Number,
    required: false
  },
  lessonTime: {
    type: Schema.Types.String,
    required: true
  },
  lessonDays: {
    type: Schema.Types.String,
    required: true
  },
  status: {
    type: Schema.Types.String,
    required: true
  },
}, {timestamps: true});


export const Pupil = model ('pupil', PupilSchema);


