/* ========================
variables
======================== */

var coin_btn = document.getElementById('coin-btn');
var wood_btn = document.getElementById('wood-btn');
var stone_btn = document.getElementById('stone-btn');
var metal_btn = document.getElementById('metal-btn');
var gems_btn = document.getElementById('gems-btn');

var wallet_btn = document.getElementById('wallet-btn');
var axe_btn = document.getElementById('axe-btn');
var pickaxe_btn = document.getElementById('pickaxe-btn');
var furnace_btn = document.getElementById('furnace-btn');
var gem_drill_btn = document.getElementById('gem_drill-btn');

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


var item_list = ['wallet', 'axe', 'pickaxe', 'furnace', 'gem_drill'];
var var_list = ['coins', 'wood', 'stone', 'metal', 'gems'];
var val_list = ['coins_value', 'wood_value', 'stone_value', 'metal_value', 'gems_value'];

//
if (var_list.length != val_list.length || var_list.length != item_list.length) {
    console.log("ERROR: item lists are not of the same length")
}
//  
for (let i = 0; i < 5; i++) { // recalls stored values from local storage
    if (localStorage.getItem(val_list[i])) {
        mats[var_list[i]].value = parseInt(localStorage.getItem(val_list[i]));
    }
    else {
        mats[var_list[i]].value = 0;
    }
//----------------------------------------------------------------------//
    let x = var_list[i] + '_incps';
    if (localStorage.getItem(x)) {
        mats[var_list[i]].incps = parseInt(localStorage.getItem(x));
    }
    else {
        mats[var_list[i]].incps = 0;
    }
//----------------------------------------------------------------------//
    let y = var_list[i] + '_inc';
    if (localStorage.getItem(y)) {
        skills[item_list[i]].power = parseInt(localStorage.getItem(y));
    }
    else {
        if (i == 0) {
            skills[item_list[i]].power = 1; // wallet level starts at one
        }
        else {
            skills[item_list[i]].power = 0;
        }
    }
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
    mats[var_list[a]].value = parseInt(mats[var_list[a]].value) + skills[item_list[a]].power;
    localStorage.setItem(val_list[a], mats[var_list[a]].value);
    document.getElementById(var_list[a]).innerHTML = mats[var_list[a]].value;

}

/*
b =>
0 = wallet
1 = axe
2 = pickaxe
3 = furnace
4 = gem drill
*/

function skill_upgrade(a) {
    if (mats.coins.value >= skills.wallet.cost.coins) {
        mats.coins.value -= skills.wallet.cost.coins;
        localStorage.setItem('coins_value', mats.coins.value);
        document.getElementById('coins').innerHTML = mats.coins.value;
    }
}

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