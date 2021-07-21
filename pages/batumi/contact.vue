<template>
    <div class="gen-contact">
        <ContactUsForm :branchId="0" />
        <ContactUsInfo :branchId="0" />
    </div>
</template>

<script>
import ContactUsForm from "../../components/medium/contactUsForm";
import ContactUsInfo from "../../components/medium/contactUsInfo";

export default {
    name: "Contact",
    components: { ContactUsForm, ContactUsInfo },
};
</script>

<style lang="scss" scoped>
</style>