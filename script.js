/* ========================
variables
======================== */

var coin_btn = document.getElementById('coin-btn');
var wood_btn = document.getElementById('wood-btn');
var stone_btn = document.getElementById('stone-btn');
var metal_btn = document.getElementById('metal-btn');
var gems_btn = document.getElementById('gems-btn');

var wallet_btn = document.getElementById('wallet-btn');

var reset_btn = document.getElementById('reset');

var mats = {
    coins: {
        value: 0,
        incps: 0 // increments per second
    },
    wood: {
        value: 0,
        incps: 0
    },
    stone: {
        value: 0,
        incps: 0
    },
    metal: {
        value: 0,
        incps: 0
    },
    gems: {
        value: 0,
        incps: 0
    }
}

var skills = {
    wallet: {
        level: 1,
        power: 1,
        cost: { // cost of the next level
            coins: 3,
            wood: 0,
            stone: 0,
            metal: 0,
            gems: 0
        }
    },
    axe: {
        level: 0,
        power: 0,
        cost: {
            coins: 5,
            wood: 0,
            stone: 0,
            metal: 0,
            gems: 0
        }
    },
    pickaxe: {
        level: 0,
        power: 0,
        cost: {
            coins: 5,
            wood: 5,
            stone: 0,
            metal: 0,
            gems: 0
        }
    },
    furnace: {
        level: 0,
        power: 0,
        cost: {
            coins: 15,
            wood: 10,
            stone: 7,
            metal: 0,
            gems: 0
        }
    },
    gem_drill: {
        level: 0,
        power: 0,
        cost: {
            coins: 25,
            wood: 15,
            stone: 12,
            metal: 7,
            gems: 0
        }
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



if (localStorage.getItem('coin_inc')) {
    skills.wallet.power = parseInt(localStorage.getItem('coin_inc'));
}
else {
    skills.wallet.power = 1;
}
if (localStorage.getItem('wood_inc')) {
    skills.wallet.power = parseInt(localStorage.getItem('wood_inc'));
}
else {
    skills.wallet.power = 1;
}
if (localStorage.getItem('stone_inc')) {
    skills.wallet.power = parseInt(localStorage.getItem('stone_inc'));
}
else {
    skills.wallet.power = 1;
}
if (localStorage.getItem('metal_inc')) {
    skills.wallet.power = parseInt(localStorage.getItem('metal_inc'));
}
else {
    skills.wallet.power = 1;
}
if (localStorage.getItem('gem_inc')) {
    skills.wallet.power = parseInt(localStorage.getItem('gem_inc'));
}
else {
    skills.wallet.power = 1;
}

/* ========================
functions
======================== */

const coin_btn_click = () => {
    mats.coins.value = parseInt(mats.coins.value) + skills.wallet.power;
    localStorage.setItem('coins_value', mats.coins.value);
    document.getElementById('coins').innerHTML = mats.coins.value;
}
coin_btn.addEventListener('click', coin_btn_click);

const wood_btn_click = () => {
    mats.wood.value = parseInt(mats.wood.value) + skills.axe.power;
    localStorage.setItem('wood_value', mats.wood.value);
    document.getElementById('wood').innerHTML = mats.wood.value;
}
wood_btn.addEventListener('click', wood_btn_click);

const stone_btn_click = () => {
    mats.stone.value = parseInt(mats.stone.value) + skills.pickaxe.power;
    localStorage.setItem('stone_value', mats.stone.value);
    document.getElementById('stone').innerHTML = mats.stone.value;
}
stone_btn.addEventListener('click', stone_btn_click);

const metal_btn_click = () => {
    mats.metal.value = parseInt(mats.metal.value) + skills.furnace.power;
    localStorage.setItem('metal_value', mats.metal.value);
    document.getElementById('metal').innerHTML = mats.metal.value;
}
metal_btn.addEventListener('click', metal_btn_click);

const gems_btn_click = () => {
    mats.gems.value = parseInt(mats.gems.value) + skills.gem_drill.power;
    localStorage.setItem('gems_value', mats.gems.value);
    document.getElementById('gems').innerHTML = mats.gems.value;
}
gems_btn.addEventListener('click', gems_btn_click);

/*
b =>
0 = wallet
1 = axe
2 = pickaxe
3 = furnace
4 = gem drill
*/

function hover(a, b) { // a is mouse on or off and b is which item
    if (a == 0) { // hover(0) is for mouseenter
        console.log('mouse on');
        if (b == 0) {
            document.getElementById('coins-cost').innerHTML = skills.wallet.cost.coins;
            document.getElementById('wood-cost').innerHTML = skills.wallet.cost.wood;
            document.getElementById('stone-cost').innerHTML = skills.wallet.cost.stone;
            document.getElementById('metal-cost').innerHTML = skills.wallet.cost.metal;
            document.getElementById('gems-cost').innerHTML = skills.wallet.cost.gems;
        }
        else if (b == 1) {
            document.getElementById('coins-cost').innerHTML = skills.axe.cost.coins;
            document.getElementById('wood-cost').innerHTML = skills.axe.cost.wood;
            document.getElementById('stone-cost').innerHTML = skills.axe.cost.stone;
            document.getElementById('metal-cost').innerHTML = skills.axe.cost.metal;
            document.getElementById('gems-cost').innerHTML = skills.axe.cost.gems;
        }
        else if (b == 2) {
            document.getElementById('coins-cost').innerHTML = skills.pickaxe.cost.coins;
            document.getElementById('wood-cost').innerHTML = skills.pickaxe.cost.wood;
            document.getElementById('stone-cost').innerHTML = skills.pickaxe.cost.stone;
            document.getElementById('metal-cost').innerHTML = skills.pickaxe.cost.metal;
            document.getElementById('gems-cost').innerHTML = skills.pickaxe.cost.gems;
        }
        else if (b == 3) {
            document.getElementById('coins-cost').innerHTML = skills.furnace.cost.coins;
            document.getElementById('wood-cost').innerHTML = skills.furnace.cost.wood;
            document.getElementById('stone-cost').innerHTML = skills.furnace.cost.stone;
            document.getElementById('metal-cost').innerHTML = skills.furnace.cost.metal;
            document.getElementById('gems-cost').innerHTML = skills.furnace.cost.gems;
        }
        else if (b == 4) {
            document.getElementById('coins-cost').innerHTML = skills.gem_drill.cost.coins;
            document.getElementById('wood-cost').innerHTML = skills.gem_drill.cost.wood;
            document.getElementById('stone-cost').innerHTML = skills.gem_drill.cost.stone;
            document.getElementById('metal-cost').innerHTML = skills.gem_drill.cost.metal;
            document.getElementById('gems-cost').innerHTML = skills.gem_drill.cost.gems;
        }
    }
    else if (a == 1) { // hover(1) is for mouseleave
        console.log('mouse off');
        document.getElementById('coins-cost').innerHTML = 0;
        document.getElementById('wood-cost').innerHTML = 0;
        document.getElementById('stone-cost').innerHTML = 0;
        document.getElementById('metal-cost').innerHTML = 0;
        document.getElementById('gems-cost').innerHTML = 0;
    }
}


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