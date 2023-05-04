<script>
    export default {
        props: {
            modelValue: { type: String, default: "" },
        },
        emits: ["submit", "update:modelValue"],
        methods: {
            updateModelValue(e) {
                this.$emit("update:modelValue", e.target.value);
            },
        },
    };
</script>
<template>
    <div class="input-group" style="width: 500px; margin: 0 auto;">
        <input
        type="text"
        class="form-control"
        placeholder="Nhập thông tin cần tìm"
        :value="modelValue"
        @input="updateModelValue"
        />
    </div>
</template>