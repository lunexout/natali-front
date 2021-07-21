<template>
    <div class="form">
        <div class="form-wrapper">
            <div class="title" v-if="title">{{ title }}</div>
            <div class="title" v-else>Schedule a meeting\spa concept</div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label :for="'full_name' + this._uid"
                        >Full name
                        <input
                            type="text"
                            name="full_name"
                            :id="'full_name' + this._uid"
                        />
                    </label>
                    <label :for="'rin' + this._uid"
                        >Reader Identification Number
                        <input type="text" name="rin" :id="'rin' + this._uid" />
                    </label>
                    <label :for="'email' + this._uid"
                        >E-mail
                        <input
                            type="text"
                            name="email"
                            :id="'email' + this._uid"
                        />
                    </label>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label :for="'personal_number' + this._uid"
                        >Personal number
                        <input
                            type="text"
                            name="personal_number"
                            :id="'personal_number' + this._uid"
                        />
                    </label>
                    <label :for="'message' + this._uid"
                        >Name and author of the learning resource
                        <textarea
                            name="message"
                            :id="'message' + this._uid"
                        ></textarea>
                    </label>
                </div>
            </div>
            <a href="#" class="submit">Apply now</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormLearningAcademy",
    props: ["title"],
};
</script>

<style lang="scss" scoped>
.form {
    .title {
        margin-left: 8px;
        margin-right: 8px;
        font-weight: 500;
        font-size: 32px;
    }
    .form-wrapper {
        font-family: "Config Condensed";
        max-width: 720px;
        margin: 30px auto;
        label {
            display: block;
            margin: 16px 0 0 0;
        }
        textarea {
            padding-top: 10px;
            height: 120px;
            resize: none;
        }
        input,
        select,
        textarea {
            font-family: "Config Condensed";
            font-size: 16px;
            padding-left: 16px;
            width: 100%;
            background-color: rgba($color: #c9cbcd, $alpha: 0.1);
            border: 1px solid rgba($color: #000, $alpha: 0.1);
            border-radius: 4px;
            box-sizing: border-box;
            transition: 0.2s;
            margin-top: 4px;
            &:focus {
                border: 1px solid rgba($color: #ffaa00, $alpha: 0.4);
            }
        }
        input,
        select {
            height: 40px;
            line-height: 40px;
        }
        .submit {
            display: block;
            background-color: #ffe1a4;
            color: #000;
            text-decoration: none;
            line-height: 40px;
            text-align: center;
            margin-top: 24px;
            margin-left: 8px;
            margin-right: 8px;
            font-family: "Config Condensed";
            font-weight: 600;
            font-size: 18px;
            height: 40px;
            border-radius: 4px;
        }
    }
}
</style>