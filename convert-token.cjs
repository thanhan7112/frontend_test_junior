console.log('begin convert');
const fs = require('fs');
const path = require('path');


const modeGlobal = 'DEFAULT'; //Default
let objGlobal = {};


async function start() {
    const filePath = path.join(__dirname, 'src/assets/design-token-color/BOILERPLATE.json');

    if(!fs.existsSync(filePath)) return;
    const data = await fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    objGlobal = jsonData[1].Global.modes[modeGlobal];

    const outputColor = {
        'light': {},
        'dark': {},
        'global': {}
    };

    const getValueFromPath = (obj, path) => path.split('.').reduce((o, k) => (o || {})[k], obj);

    function handelColor(mode, path = [], value){
        const objColor = outputColor[mode];

        const pathCustomize = path.join('-').toLowerCase().replaceAll(' ', '');
        if(value.startsWith('{')){
            const keyGlobal = value.substr(1, value.length - 2);
            value = getValueFromPath(objGlobal, keyGlobal)['$value'];
        }

        objColor[pathCustomize] = value;
    }



    function extraColor(mode, objColor){
        for(let key01 in objColor){
            // key01: Neutral, Brand, Status, Shadow...
            const obj01 = objColor[key01];

            if(obj01['$value']){
                handelColor(mode, [key01], obj01['$value']);
                continue;
            }

            for(let key02 in obj01){
                // key02: BG, FG, Stroke, Danger, ...
                const obj02 = obj01[key02];

                if(obj02['$value']){
                    handelColor(mode, [key01, key02], obj02['$value']);
                    continue;
                }

                for(let key03 in obj02){
                    const obj03 = obj02[key03];

                    if(obj03['$value']){
                        handelColor(mode, [key01, key02, key03], obj03['$value']);
                        continue;
                    }

                    for(let key04 in obj03){
                        const obj04 = obj03[key04];

                        if(obj04['$value']){
                            handelColor(mode, [key01, key02, key03, key04], obj04['$value']);
                            continue;
                        }

                        for(let key05 in obj04){
                            const obj05 = obj04[key05];
                            if(obj05['$value']){
                                handelColor(mode, [key01, key02, key03, key04, key05], obj05['$value']);
                                continue;
                            }

                            for(let key06 in obj05){
                                const obj06 = obj05[key06];
                                if(obj06['$value']){
                                    handelColor(mode, [key01, key02, key03, key04, key05,  key06], obj06['$value']);
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    extraColor('light', jsonData[0].Color.modes.Light);
    extraColor('dark', jsonData[0].Color.modes.Dark);
    extraColor('global', jsonData[1].Global.modes.Yellow.Colors);

     // B2
    const colorTailwind = {};
    const lightDaisyUI = {};
    const darkDaisyUI = {};

    for(let key in outputColor.global){
        colorTailwind['color-' + key] = 'var(--color-'+ key + ')';
        darkDaisyUI['--color-' + key] = outputColor.global[key];
        lightDaisyUI['--color-' + key] = outputColor.global[key];
    }

    for(let key in outputColor.light){
        colorTailwind[key] = 'var(--'+ key + ')';
        lightDaisyUI['--' + key] = outputColor.light[key];
    }

    for(let key in outputColor.dark){
        colorTailwind[key] = 'var(--'+ key + ')';
        darkDaisyUI['--' + key] = outputColor.dark[key];
    }

    await fs.writeFileSync(path.join(__dirname, 'src/assets/design-token-color/output.json'), JSON.stringify(outputColor, null, 2), 'utf8');
    await fs.writeFileSync(path.join(__dirname, 'src/assets/design-token-color/tailwind-color.json'), JSON.stringify(colorTailwind, null, 2), 'utf8');
    await fs.writeFileSync(path.join(__dirname, 'src/assets/design-token-color/light-daisyui.json'), JSON.stringify(lightDaisyUI, null, 2), 'utf8');
    await fs.writeFileSync(path.join(__dirname, 'src/assets/design-token-color/dark-daisyui.json'), JSON.stringify(darkDaisyUI, null, 2), 'utf8');


    console.log('echo DONE');
}

start();
