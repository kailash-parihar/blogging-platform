const mongoose = require("mongoose");

// * * User Schema for the Blogging Application

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      minlength: [3, "First name must be at least 3 characters long."],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "Last name is required."],
      minlength: [3, "Last name must be at least 3 characters long."],
      trim: true,
    },

    about: {
      type: String,
      required: [true, "A brief summary about the user is required."],
      minlength: [10, "Summary must be at least 10 characters long."],
      maxlength: [200, "Summary cannot exceed 200 characters."],
      trim: true,
    },

    // ! Email address of the user. must match the provided regex pattern for a valid email.

    email: {
      type: String,
      lowercase: true,
      required: [true, "Email is required."],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email address.",
      ],
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required."],
    },

    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      minlength: [3, "Username must be at least 3 characters long."],
      trim: true,
    },
    /**
     * * Role assigned to the user.
     * * Acceptable values: "Admin", "User", or "Author". Defaults to "User".
     * ! If a value outside the enum is provided, it returns an error with {VALUE} replaced by the input.
     */
    role: {
      type: String,
      enum: {
        values: ["SuperAdmin", "Admin", "User", "Author"],
        message: "{VALUE} is not a valid role.",
      },
      default: "User",
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },

    // Avatar URL or image path for the user. defaults to an empty string if not provided.
    avatar: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required."],
    },

    // * Articles written by the user. Array of ObjectIDs referencing the "Article" collection.
    article: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],

    phoneNumber: {
      required: [true, "Phone number is required."],
      type: Number,
    },

    // Communication address details for the user.
    communicationAddress: {
      address_1: {
        type: String,
        required: [true, "Address line 1 is required."],
        trim: true,
      },
      address_2: {
        type: String,
        required: [true, "Address line 2 is required."],
        trim: true,
      },
      country: {
        type: String,
        enum: {
          values: ["INDIA", "US", "AUSTRALIA", "DUBAI", "SINGAPORE"],
          message: "{VALUE} is not a supported country.",
        },
        default: "INDIA",
      },
      phoneNumberCountryCode: {
        type: String,
        default: "+91",
      },
      state: {
        type: String,
        required: [true, "State is required."],
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
