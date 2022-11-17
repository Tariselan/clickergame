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
    skills.axe.power = parseInt(localStorage.getItem('wood_inc'));
}
else {
    skills.axe.power = 0;
}
if (localStorage.getItem('stone_inc')) {
    skills.pickaxe.power = parseInt(localStorage.getItem('stone_inc'));
}
else {
    skills.pickaxe.power = 0;
}
if (localStorage.getItem('metal_inc')) {
    skills.furnace.power = parseInt(localStorage.getItem('metal_inc'));
}
else {
    skills.furnace.power = 0;
}
if (localStorage.getItem('gem_inc')) {
    skills.gem_drill.power = parseInt(localStorage.getItem('gem_inc'));
}
else {
    skills.gem_drill.power = 0;
}

/* ========================
functions
======================== */

/* VALUES OF 'a'
0 = coins / wallet
1 = wood / axe
2 = stone / pickaxe
3 = metal / furnace
4 = gems / gem drill
*/

function material_click(a) {
    let x = '';
    let y = '';
    let z = '';
    if (a == 0) {
        x = 'coins';
        y = 'wallet';
    }
    else if (a == 1) {
        x = 'wood';
        y = 'axe';
    }
    else if (a == 2) {
        x = 'stone';
        y = 'pickaxe';
    }
    else if (a == 3) {
        x = 'metal';
        y = 'furnace';
    }
    else if (a == 4) {
        x = 'gems';
        y = 'gem_drill';
    }
    z = x + '_value';
    mats[x].value = parseInt(mats[x].value) + skills[y].power;
    localStorage.setItem(z, mats[x].value);
    document.getElementById(x).innerHTML = mats[x].value;

}
/*
b =>
0 = wallet
1 = axe
2 = pickaxe
3 = furnace
4 = gem drill
*/

var item_list = ['wallet', 'axe', 'pickaxe', 'furnace', 'gem_drill'];


function hover(a, b) { // a is mouse on or off and b is which item
    let x = '';
    if (a == 0) { // hover(0) is for mouseenter
        for (let i = 0; i < 5; i++) {
            x = var_list[i] + '-cost';
            document.getElementById(x).innerHTML = skills[item_list[b]].cost[var_list[i]];
        }
    }
    else if (a == 1) { // hover(1) is for mouseleave
        for (let i = 0; i < 5; i++) {
            x = var_list[i] + '-cost';
            document.getElementById(x).innerHTML = 0;
        }
    }
}

/* VALUES OF 'a'
0 = coins / wallet
1 = wood / axe
2 = stone / pickaxe
3 = metal / furnace
4 = gems / gem drill
*/

var var_list = ['coins', 'wood', 'stone', 'metal', 'gems'];
var val_list = ['coins_value', 'wood_value', 'stone_value', 'metal_value', 'gems_value'];

//
if (var_list.length != val_list.length || var_list.length != item_list.length) {
    console.log("ERROR: item lists are not of the same length")
}
//  

const reset_button = () => {
    for (let i = 0; i < var_list.length; i++) {
        localStorage.setItem(val_list[i], 0);
        mats[var_list[i]].value = localStorage.getItem(val_list[i]);
        document.getElementById(var_list[i]).innerHTML = mats[var_list[i]].value;
    }
}

reset_btn.addEventListener('click', reset_button);


const load_values = () => {
    for (let i = 0; i < 5; i++) {
        document.getElementById(var_list[i]).innerHTML = mats[var_list[i]].value;
    }
}
/* ========================
onload functions
======================== */

load_values()