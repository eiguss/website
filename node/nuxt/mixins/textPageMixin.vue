<template>
    <div class="text-page">
        
        <template 
            v-for="element in elements"
        >
            <component 
                :is="element.type"
                v-html="$t(labelsKey+'.'+element.label)"
            ></component>
        </template>
    </div>
</template>