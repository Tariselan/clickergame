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
            coins: 6,
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
            coins: 12,
            wood: 3,
            stone: 0,
            metal: 0,
            gems: 0
        }
    },
    furnace: {
        level: 0,
        power: 0,
        cost: {
            coins: 24,
            wood: 6,
            stone: 3,
            metal: 0,
            gems: 0
        }
    },
    gem_drill: {
        level: 0,
        power: 0,
        cost: {
            coins: 48,
            wood: 12,
            stone: 6,
            metal: 3,
            gems: 0
        }
    }
}


var item_list = ['wallet', 'axe', 'pickaxe', 'furnace', 'gem_drill'];
var var_list = ['coins', 'wood', 'stone', 'metal', 'gems'];
var val_list = ['coins_value', 'wood_value', 'stone_value', 'metal_value', 'gems_value'];

// checks if lists containing materials and items are of the same length
if (var_list.length != val_list.length || var_list.length != item_list.length) {
    console.log("ERROR: item lists are not of the same length")
}
//  recall variables function
for (let i = 0; i < 5; i++) { // recalls stored material values from local storage
    if (localStorage.getItem(val_list[i])) {
        mats[var_list[i]].value = parseInt(localStorage.getItem(val_list[i]));
    }
    else {
        mats[var_list[i]].value = 0;
    }
//---------recalls stored inc per sec values from local storage---------//
    let x = var_list[i] + '_incps';
    if (localStorage.getItem(x)) {
        mats[var_list[i]].incps = parseInt(localStorage.getItem(x));
    }
    else {
        mats[var_list[i]].incps = 0;
    }
//----------recalls stored inc + lvl values from local storage----------//
    let y = var_list[i] + '_inc';
    let z = item_list[i] + '_lvl';
    if (localStorage.getItem(y)) {
        skills[item_list[i]].power = parseInt(localStorage.getItem(y));
        skills[item_list[i]].level = parseInt(localStorage.getItem(z));
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
    mats[var_list[a]].value = parseInt(mats[var_list[a]].value) + parseInt(skills[item_list[a]].power);
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

function skill_price(a) {
    let x = item_list[a] + '_lvl';
    let y = var_list[a] + '_inc';
    skills[item_list[a]].level++;
    localStorage.setItem(x, skills[item_list[a]].level);
    skills[item_list[a]].cost.coins = 3 * Math.floor(2**(skills[item_list[a]].level-1));
    skills[item_list[a]].cost.wood = 3 * Math.floor(2**(skills[item_list[a]].level-3));
    skills[item_list[a]].stone = 3 * Math.floor(2**(skills[item_list[a]].level-10));
    skills[item_list[a]].metal = 3 * Math.floor(2**(skills[item_list[a]].level-31));
    skills[item_list[a]].gems = 3 * Math.floor(2**(skills[item_list[a]].level-51));
    skills[item_list[a]].power++;
    localStorage.setItem(y, skills[item_list[a]].power);
    document.getElementById(x).innerHTML = skills[item_list[a]].level;
}

function bigger_value(a) { // checks if user has enough resources for purchase
    if (mats.coins.value >= skills[item_list[a]].cost.coins) {
        if (mats.wood.value >= skills[item_list[a]].cost.wood) {
            if (mats.stone.value >= skills[item_list[a]].cost.stone) {
                if (mats.metal.value >= skills[item_list[a]].cost.metal) {
                    if (mats.gems.value >= skills[item_list[a]].cost.gems) {
                        return true
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function skill_buy(a) {
    for (let i = 0; i < 5; i++) {
        mats[var_list[i]].value -= skills[item_list[a]].cost[var_list[i]];
        localStorage.setItem(val_list[i], mats[var_list[i]].value);
        document.getElementById(var_list[i]).innerHTML = mats[var_list[i]].value;
    }
}

function skill_upgrade(a) {
    if (bigger_value(a)) {
        skill_buy(a)
        skill_price(a);     
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
    let x = '';
    let y = '';
    for (let i = 0; i < 5; i++) { // resets values of the materials
        localStorage.setItem(val_list[i], 0);
        mats[var_list[i]].value = localStorage.getItem(val_list[i]);
        document.getElementById(var_list[i]).innerHTML = mats[var_list[i]].value;
    }
    for (let i = 0; i <5; i++) {
        x = var_list[i] + '_inc';
        y = item_list[i] + '_lvl';
        if (i == 0) {
            localStorage.setItem(x, 1);
            skills[item_list[i]].power = localStorage.getItem(x);
            localStorage.setItem(y, 1);
            skills[item_list[i]].level = localStorage.getItem(y);
            document.getElementById(y).innerHTML = skills[item_list[i]].level;
        }
        else {
            localStorage.setItem(x, 0);
            localStorage.setItem(y,0);
            document.getElementById(y).innerHTML = skills[item_list[i]].level;
        }
    }
}

reset_btn.addEventListener('click', reset_button);


const load_values = () => {
    for (let i = 0; i < 5; i++) { // loads values of the materials
        let x = item_list[i] + '_lvl';
        document.getElementById(var_list[i]).innerHTML = mats[var_list[i]].value;
        document.getElementById(x).innerHTML = skills[item_list[i]].level;
    }
}
/* ========================
onload functions
======================== */

load_values()