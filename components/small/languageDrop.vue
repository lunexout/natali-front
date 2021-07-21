<template>
    <div class="custom-select-wrapper" @click="openDropdown">
        <div class="custom-select">
            <div class="custom-select__trigger"><span>{{ languages[0].shortName }}</span>
                <div class="arrow"></div>
            </div>
            <div class="custom-options">
                <span v-for="(lang, index) of languages" :key="index" :data-value="lang.value" :class="{ 'selected' : index == selectedIndex }" class="custom-option" @click="customOption($event)">{{lang.shortName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LanguageDropdown',
    data() {
        return {
            selectedIndex: 0,
            languages: [
                {
                    shortName: 'EN',
                    value: 'en'
                },
                {
                    shortName: 'RU',
                    value: 'ru'
                },
                {
                    shortName: 'GE',
                    value: 'ge'
                }
            ],
        }
    },
    methods: {
        openDropdown() {
            document.querySelector('.custom-select-wrapper').querySelector('.custom-select').classList.toggle('open');
        },
        customOption(e) {
            let dis = e.target;
            if (!dis.classList.contains('selected')) {
                dis.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                dis.classList.add('selected');
                dis.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = dis.textContent;
            }
        }
    }
}

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

</script>

<style scoped>
.custom-select-wrapper {
    position: relative;
    user-select: none;
    width: 50px;
    height: 20px;
}

.custom-select {
    position: relative;
    display: flex;
    flex-direction: column;
}

.custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
    font-size: 16px;
    font-weight: 400;
    color: #3b3b3b;
    height: 20px;
    line-height: 20px;
    background: #ffffff;
    cursor: pointer;
    border: none;
}

.custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    border-top: 0;
    background: #fff;
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
}

.custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
}

.custom-option {
    position: relative;
    display: block;
    padding: 0 4px;
    font-size: 16px;
    font-weight: 300;
    color: #3b3b3b;
    line-height: 20px;
    cursor: pointer;
    transition: all 0.5s;
}

.custom-option:hover {
    cursor: pointer;
    background-color: #3d3d3d;
    color: #fff;
}

.custom-option.selected {
    color: #ffffff;
    background-color: #000;
}

.arrow {
    position: relative;
    height: 10px;
    width: 10px;
}

.arrow::before,
.arrow::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
}

.arrow::before {
    left: -3px;
    transform: rotate(45deg);
    background-color: #000;
}

.arrow::after {
    left: 3px;
    transform: rotate(-45deg);
    background-color: #000;
}

.open .arrow::before {
    left: -3px;
    transform: rotate(-45deg);
}

.open .arrow::after {
    left: 3px;
    transform: rotate(45deg);
}
</style>