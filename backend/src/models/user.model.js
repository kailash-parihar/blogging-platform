/**
 * User Schema for the Blogging Application.
 * Defines the structure and validation for user documents in MongoDB.
 */
const mongoose = require("mongoose");
const hashPasswordHook = require("../hooks/hashPassword.hook");

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

    // Email address must match a valid email pattern.
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
     * Role assigned to the user.
     * Acceptable values: "SuperAdmin", "Admin", "User", "Author".
     * Defaults to "User". Invalid values will produce an error.
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

    // Avatar URL or image path; defaults to an empty string.
    avatar: {
      type: String,
      default: "",
    },

    dob: {
      type: Date,
      required: [true, "Date of birth is required."],
    },

    // References to articles written by the user.
    article: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
      },
    ],

    phoneNumber: {
      type: Number,
      required: [true, "Phone number is required."],
    },

    // Communication address details.
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

hashPasswordHook(userSchema);

const User = mongoose.model("User", userSchema);
module.exports = { User };
