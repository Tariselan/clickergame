/* ========================
variables
======================== */

var coin_btn = document.getElementById('coin-btn');
var wood_btn = document.getElementById('wood-btn');
var stone_btn = document.getElementById('stone-btn');
var metal_btn = document.getElementById('metal-btn');
var gems_btn = document.getElementById('gems-btn');
var reset_btn = document.getElementById('reset');

var mats = {
    coins: {
        value: 0,
        inc: 1,
        incps: 0 // increments per second
    },
    wood: {
        value: 0,
        inc: 1,
        incps: 0
    },
    stone: {
        value: 0,
        inc: 1,
        incps: 0
    },
    metal: {
        value: 0,
        inc: 1,
        incps: 0
    },
    gems: {
        value: 0,
        inc: 1,
        incps: 0
    }
}
if (localStorage.getItem('coins_value')) {
    mats.coins.value = parseInt(localStorage.getItem('coins_value'));
}
else {
    mats.coins.value = 0;
}
if (localStorage.getItem('wood_value')) {
    mats.wood.value = parseInt(localStorage.getItem('wood_value'));
}
else {
    mats.wood.value = 0;
}
if (localStorage.getItem('stone_value')) {
    mats.stone.value = parseInt(localStorage.getItem('stone_value'));
}
else {
    mats.stone.value = 0;
}
if (localStorage.getItem('metal_value')) {
    mats.metal.value = parseInt(localStorage.getItem('metal_value'));
}
else {
    mats.metal.value = 0;
}
if (localStorage.getItem('gems_value')) {
    mats.gems.value = parseInt(localStorage.getItem('gems_value'));
}
else {
    mats.gems.value = 0;
}
if (localStorage.getItem('coins_inc')) {
    mats.coins.inc = parseInt(localStorage.getItem('coins_inc'));
}
else {
    mats.coins.inc = 0;
}
if (localStorage.getItem('wood_inc')) {
    mats.wood.inc = parseInt(localStorage.getItem('wood_inc'));
}
else {
    mats.wood.inc = 0;
}
if (localStorage.getItem('stone_inc')) {
    mats.stone.inc = parseInt(localStorage.getItem('stone_inc'));
}
else {
    mats.stone.inc = 0;
}
if (localStorage.getItem('metal_inc')) {
    mats.metal.inc = parseInt(localStorage.getItem('metal_inc'));
}
else {
    mats.metal.inc = 0;
}
if (localStorage.getItem('gems_inc')) {
    mats.gems.inc = parseInt(localStorage.getItem('gems_inc'));
}
else {
    mats.gems.inc = 0;
}
if (localStorage.getItem('coins_incps')) {
    mats.coins.incps = parseInt(localStorage.getItem('coins_incps'));
}
else {
    mats.coins.incps = 0;
}
if (localStorage.getItem('wood_incps')) {
    mats.wood.incps = parseInt(localStorage.getItem('wood_incps'));
}
else {
    mats.wood.incps = 0;
}
if (localStorage.getItem('stone_incps')) {
    mats.stone.incps = parseInt(localStorage.getItem('stone_incps'));
}
else {
    mats.stone.incps = 0;
}
if (localStorage.getItem('metal_incps')) {
    mats.metal.incps = parseInt(localStorage.getItem('metal_incps'));
}
else {
    mats.metal.incps = 0;
}
if (localStorage.getItem('gems_incps')) {
    mats.gems.incps = parseInt(localStorage.getItem('gems_incps'));
}
else {
    mats.gems.incps = 0;
}

/* ========================
functions
======================== */

const coin_btn_click = () => {
    mats.coins.value = parseInt(mats.coins.value) + mats.coins.inc;
    localStorage.setItem('coins_value', mats.coins.value);
    document.getElementById('coins').innerHTML = mats.coins.value;
}
coin_btn.addEventListener('click', coin_btn_click);

const wood_btn_click = () => {
    mats.wood.value = parseInt(mats.wood.value) + mats.wood.inc;
    localStorage.setItem('wood_value', mats.wood.value);
    document.getElementById('wood').innerHTML = mats.wood.value;
}
wood_btn.addEventListener('click', wood_btn_click);

const stone_btn_click = () => {
    mats.stone.value = parseInt(mats.stone.value) + mats.stone.inc;
    localStorage.setItem('stone_value', mats.stone.value);
    document.getElementById('stone').innerHTML = mats.stone.value;
}
stone_btn.addEventListener('click', stone_btn_click);

const metal_btn_click = () => {
    mats.metal.value = parseInt(mats.metal.value) + mats.metal.inc;
    localStorage.setItem('metal_value', mats.metal.value);
    document.getElementById('metal').innerHTML = mats.metal.value;
}
metal_btn.addEventListener('click', metal_btn_click);

const gems_btn_click = () => {
    mats.gems.value = parseInt(mats.gems.value) + mats.gems.inc;
    localStorage.setItem('gems_value', mats.gems.value);
    document.getElementById('gems').innerHTML = mats.gems.value;
}
gems_btn.addEventListener('click', gems_btn_click);


const reset_button = () => {
    localStorage.setItem('coins_value', 0);
    mats.coins.value = localStorage.getItem('coins_value');
    document.getElementById('coins').innerHTML = mats.coins.value;
    //
    localStorage.setItem('wood_value', 0);
    mats.wood.value = localStorage.getItem('wood_value');
    document.getElementById('wood').innerHTML = mats.wood.value;
    //
    localStorage.setItem('stone_value', 0);
    mats.stone.value = localStorage.getItem('stone_value');
    document.getElementById('stone').innerHTML = mats.stone.value;
    //
    localStorage.setItem('metal_value', 0);
    mats.metal.value = localStorage.getItem('metal_value');
    document.getElementById('metal').innerHTML = mats.metal.value;
    //
    localStorage.setItem('gems_value', 0);
    mats.gems.value = localStorage.getItem('gems_value');
    document.getElementById('gems').innerHTML = mats.gems.value;
}
reset_btn.addEventListener('click', reset_button);


const load_values = () => {
    document.getElementById('coins').innerHTML = mats.coins.value;
    document.getElementById('wood').innerHTML = mats.wood.value;
    document.getElementById('stone').innerHTML = mats.stone.value;
    document.getElementById('metal').innerHTML = mats.metal.value;
    document.getElementById('gems').innerHTML = mats.gems.value;
}
/* ========================
onload functions
======================== */

load_values()