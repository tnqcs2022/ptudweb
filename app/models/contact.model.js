const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Contact name is required"],
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        address: String,
        phone: String,
        favorite: Boolean,
    },
    {timestamps: true}
);

schema.method("toJSON", function(){
    const {__v, __id, ...object} = this.toObject();
    object.id= __id;
    return object;
});

module.exports =mongoose.model("contact",schema);
