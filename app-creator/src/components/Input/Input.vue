
<script setup lang="ts">
import './Input.style.css';
import { computed, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core'
import { v4 as uuidv4 } from 'uuid';

const props =  withDefaults(defineProps<{
    modelValue: string | number,
    id: string,
    label?: string,
    type: string,
    isRequired?: boolean,
    enableTogglePassword?: boolean,
    placeholder?: string,
    isDisabled?: boolean,
    hint?: string,
    error?: string
    dateMin?: string,
    dateMax?: string,
    numberMin?: number,
    numberMax?: number
}>(), {
  id: () => `field-${uuidv4()}`
})



const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const handleInput = useDebounceFn((event: Event): void => {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}, 500);

const internalType = ref<string>(props.type)

const fieldMin = computed(() => {
    if (props.type === 'date') {
        return props.dateMin;
    } else if (props.type === 'number') {
        return props.numberMin;
    } else {
        return undefined
    }
})

const fieldMax = computed(() => {
    if (props.type === 'date') {
        return props.dateMax;
    } else if (props.type === 'number') {
        return props.numberMax;
    } else {
        return undefined
    }
})

const classes = computed(() => ({
    'app-input': true,
    'app-input--error': props.error,
    'app-input--togglePassword': props.enableTogglePassword
}));

const handleTogglePasswordFn = () => {
    internalType.value = internalType.value === "password" ? "text" : "password"
}

</script>

<template>
    <div :class="classes">
        <label :for="id">{{ label }}</label>
        <div class="relative">
            <input 
                autocomplete="new-password" 
                :required="isRequired"
                :id="id" 
                :type="internalType" 
                :placeholder="placeholder" 
                :value="modelValue" 
                @input="handleInput"
                :min="fieldMin"
                :max="fieldMax"
            />
            <slot
                name="password-toggle"
                v-if="enableTogglePassword"
            >
                <div 
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                    <font-awesome-icon icon="eye" @click="handleTogglePasswordFn" v-if="internalType === 'password'"/>
                    <font-awesome-icon icon="eye-slash" @click="handleTogglePasswordFn" v-else/>
                </div>

            </slot>
        </div>
        <TransitionGroup name="slide-fade" tag="div">
            <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
            <span v-else class="text-stone-500 text-sm">{{ hint }}</span>
        </TransitionGroup>
    </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0, 0.5);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>