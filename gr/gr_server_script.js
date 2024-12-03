let color = ['black',
  'white',
  'orange',
  'magenta',
  'light_blue',
  'light_gray',
  'gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'yellow',
  'lime',
  'pink']
  
  ServerEvents.recipes(event => {
      event.replaceInput({output:'minecraft:wooden_axe'},'#minecraft:planks','botania:livingwood_planks')
      event.replaceInput({output:'minecraft:wooden_pickaxe'},'#minecraft:planks','botania:livingwood_planks')
      event.replaceInput({output:'minecraft:wooden_hoe'},'#minecraft:planks','botania:livingwood_planks')
      event.replaceInput({output:'minecraft:wooden_shovel'},'#minecraft:planks','botania:livingwood_planks')
      event.replaceInput({output:'minecraft:wooden_sword'},'#minecraft:planks','botania:livingwood_planks')
      event.replaceInput({output:'minecraft:stone_axe'},'#minecraft:stone_crafting_materials','botania:livingrock')
      event.replaceInput({output:'minecraft:stone_pickaxe'},'#minecraft:stone_crafting_materials','botania:livingrock')
      event.replaceInput({output:'minecraft:stone_hoe'},'#minecraft:stone_crafting_materials','botania:livingrock')
      event.replaceInput({output:'minecraft:stone_shovel'},'#minecraft:stone_crafting_materials','botania:livingrock')
      event.replaceInput({output:'minecraft:stone_sword'},'#minecraft:stone_crafting_materials','botania:livingrock')
      event.replaceInput({output:'create:belt_connector'},'minecraft:dried_kelp','gtceu:rubber_plate')
      event.replaceInput({output:'gtceu:tin_alloy_ingot'},'minecraft:iron_ingot','gtceu:wrought_iron_ingot')
      event.replaceInput({output:'gtceu:tin_alloy_ingot'},'minecraft:iron_dust','gtceu:wrought_iron_dust')
      event.replaceInput({output:'gtceu:tin_alloy_dust'},'minecraft:iron_dust','gtceu:wrought_iron_dust')
      event.replaceInput({output:/(.*)/},'minecraft:leather','kubejs:finished_leather')
      event.replaceInput({output:/(.*)/},'#forge:leather','kubejs:finished_leather')
      event.replaceInput({output:/(.*)/},'gtceu:fluix_gem','ae2:fluix_crystal')
      event.replaceOutput({output:/(.*)/},'gtceu:fluix_gem','ae2:fluix_crystal')
      event.replaceInput({output:/(.*)/},'gtceu:fluix_dust','ae2:fluix_dust')
      event.replaceOutput({output:/(.*)/},'gtceu:fluix_dust','ae2:fluix_dust')
      event.replaceInput({output:/(.*)/},'gtceu:fluix_block','ae2:fluix_block')
      event.replaceOutput({output:/(.*)/},'gtceu:fluix_block','ae2:fluix_block')
      event.replaceOutput({output:/(.*)/},'gtceu:arcane_gold_block','eidolon:arcane_gold_block')
      event.replaceOutput({output:/(.*)/},'gtceu:arcane_gold_ingot','eidolon:arcane_gold_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:arcane_gold_nugget','eidolon:arcane_gold_nugget')
      event.replaceInput({output:/(.*)/},'gtceu:arcane_gold_block','eidolon:arcane_gold_block')
      event.replaceInput({output:/(.*)/},'gtceu:arcane_gold_ingot','eidolon:arcane_gold_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:arcane_gold_nugget','eidolon:arcane_gold_nugget')
      event.replaceOutput({output:/(.*)/},'gtceu:pewter_block','eidolon:pewter_block')
      event.replaceOutput({output:/(.*)/},'gtceu:pewter_ingot','eidolon:pewter_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:pewter_nugget','eidolon:pewter_nugget')
      event.replaceInput({output:/(.*)/},'gtceu:pewter_block','eidolon:pewter_block')
      event.replaceInput({output:/(.*)/},'gtceu:pewter_ingot','eidolon:pewter_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:pewter_nugget','eidolon:pewter_nugget')
      event.replaceInput({output:/(.*)/},'create:dough',"farmersdelight:wheat_dough")
      event.replaceInput({output:/(.*)/},'gtceu:scarlet_neodymium_block',"alexscaves:block_of_scarlet_neodymium")
      event.replaceInput({output:/(.*)/},'gtceu:azure_neodymium_block',"alexscaves:block_of_azure_neodymium")
      event.replaceInput({output:/(.*)/},'gtceu:scarlet_neodymium_ingot',"alexscaves:scarlet_neodymium_ingot")
      event.replaceInput({output:/(.*)/},'gtceu:azure_neodymium_ingot',"alexscaves:azure_neodymium_ingot")
      event.replaceOutput({output:/(.*)/},'gtceu:scarlet_neodymium_block',"alexscaves:block_of_scarlet_neodymium")
      event.replaceOutput({output:/(.*)/},'gtceu:azure_neodymium_block',"alexscaves:block_of_azure_neodymium")
      event.replaceOutput({output:/(.*)/},'gtceu:scarlet_neodymium_ingot',"alexscaves:scarlet_neodymium_ingot")
      event.replaceInput({output:/(.*)/},'gtceu:azure_neodymium_ingot',"alexscaves:azure_neodymium_ingot")
      event.replaceInput({output:/(.*)/},'gtceu:manasteel_block','botania:manasteel_block')
      event.replaceOutput({output:/(.*)/},'gtceu:manasteel_block','botania:manasteel_block')
      event.replaceInput({output:/(.*)/},'gtceu:manasteel_ingot','botania:manasteel_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:manasteel_ingot','botania:manasteel_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:dark_metal_block','born_in_chaos_v1:dark_metal_block')
      event.replaceOutput({output:/(.*)/},'gtceu:dark_metal_block','born_in_chaos_v1:dark_metal_block')
      event.replaceInput({output:/(.*)/},'gtceu:dark_metal_ingot','born_in_chaos_v1:dark_metal_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:dark_metal_ingot','born_in_chaos_v1:dark_metal_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:ironwood_ingot','twilightforest:ironwood_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:ironwood_ingot','twilightforest:ironwood_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:fiery_block','twilightforest:fiery_block')
      event.replaceInput({output:/(.*)/},'gtceu:fiery_block','twilightforest:fiery_block')
      event.replaceOutput({output:/(.*)/},'gtceu:fiery_ingot','twilightforest:fiery_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:fiery_ingot','twilightforest:fiery_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:netherite_block','minecraft:netherite_block')
      event.replaceOutput({output:/(.*)/},'gtceu:netherite_ingot','minecraft:netherite_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:netherite_block','minecraft:netherite_block')
      event.replaceInput({output:/(.*)/},'gtceu:netherite_ingot','minecraft:netherite_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:desh_block','ad_astra:desh_block')
      event.replaceInput({output:/(.*)/},'gtceu:desh_block','ad_astra:desh_block')
      event.replaceOutput({output:/(.*)/},'gtceu:desh_ingot','ad_astra:desh_ingot')
      event.replaceInput({output:/(.*)/},'gtceu:desh_ingot','ad_astra:desh_ingot')
      event.replaceOutput({output:/(.*)/},'gtceu:desh_nugget','ad_astra:desh_nugget')
      event.replaceInput({output:/(.*)/},'gtceu:desh_nugget','ad_astra:desh_nugget')
      event.replaceInput({output:/(.*)/}, '#forge:gems/fluix', 'ae2:fluix_crystal')
      event.replaceOutput({output:/(.*)/}, '#forge:gems/fluix', 'ae2:fluix_crystal')
      event.replaceInput({output:/(.*)/}, '#forge:dusts/fluix', 'ae2:fluix_dust')
      event.replaceOutput({output:/(.*)/}, '#forge:dusts/fluix', 'ae2:fluix_dust')
      event.replaceInput({output:/(.*)/}, '#forge:storage_blocks/fluix', 'ae2:fluix_block')
      event.replaceOutput({output:/(.*)/}, '#forge:storage_blocks/fluix', 'ae2:fluix_block')
      event.replaceInput({output:/(.*)/}, '#forge:storage_blocks/arcane_gold', 'eidolon:arcane_gold_block')
      event.replaceOutput({output:/(.*)/}, '#forge:storage_blocks/arcane_gold', 'eidolon:arcane_gold_block')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/arcane_gold', 'eidolon:arcane_gold_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/arcane_gold', 'eidolon:arcane_gold_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:nuggets/arcane_gold', 'eidolon:arcane_gold_nugget')
      event.replaceOutput({output:/(.*)/}, '#forge:nuggets/arcane_gold', 'eidolon:arcane_gold_nugget')
      event.replaceInput({output:/(.*)/}, '#forge:storage_blocks/pewter', 'eidolon:pewter_block')
      event.replaceOutput({output:/(.*)/}, '#forge:storage_blocks/pewter', 'eidolon:pewter_block')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/pewter', 'eidolon:pewter_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/pewter', 'eidolon:pewter_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:nuggets/pewter', 'eidolon:pewter_nugget')
      event.replaceOutput({output:/(.*)/}, '#forge:nuggets/pewter', 'eidolon:pewter_nugget')
      event.replaceInput({output:/(.*)/}, '#forge:storage_blocks/scarlet_neodymium', 'alexscaves:block_of_scarlet_neodymium')
      event.replaceInput({output:/(.*)/}, '#forge:storage_blocks/azure_neodymium', 'alexscaves:block_of_azure_neodymium')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/scarlet_neodymium', 'alexscaves:scarlet_neodymium_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/azure_neodymium', 'alexscaves:azure_neodymium_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:storage_blocks/scarlet_neodymium', 'alexscaves:block_of_scarlet_neodymium')
      event.replaceOutput({output:/(.*)/}, '#forge:storage_blocks/azure_neodymium', 'alexscaves:block_of_azure_neodymium')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/scarlet_neodymium', 'alexscaves:scarlet_neodymium_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/azure_neodymium', 'alexscaves:azure_neodymium_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/ironwood', 'twilightforest:ironwood_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/ironwood', 'twilightforest:ironwood_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:storage_blocks/fiery', 'twilightforest:fiery_block')
      event.replaceOutput({output:/(.*)/}, '#forge:storage_blocks/fiery', 'twilightforest:fiery_block')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/fiery', 'twilightforest:fiery_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/fiery', 'twilightforest:fiery_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:ingots/dark_metal', 'born_in_chaos_v1:dark_metal_ingot')
      event.replaceOutput({output:/(.*)/}, '#forge:ingots/dark_metal', 'born_in_chaos_v1:dark_metal_ingot')
      event.replaceInput({output:/(.*)/}, '#forge:nuggets/desh', 'ad_astra:desh_nugget')
      event.replaceOutput({output:/(.*)/}, '#forge:nuggets/desh', 'ad_astra:desh_nugget')
      event.replaceOutput({type:"gtceu:centrifuge",input:"gtceu:quartz_sand_dust"},'gtceu:certus_quartz_dust','gtceu:quartzite_dust')
  
      event.replaceInput({output:/botania:apothecary(.*)/},'#botania:petals','botania:apothecary_default')
  for(let c of color){
    event.replaceInput({type:"botania:petal_apothecary"},`#botania:petals/${c}`,`kubejs:${c}_petal`)
    event.remove({id:`minecraft:${c}_carpet`})
    event.shapeless(`minecraft:${c}_carpet`, [`2x minecraft:${c}_wool`])
  
  }
      let ingot =['iron','gold','diamond','steel','silver','copper','tin','bronze']
      for(let i of ingots) {
  
      event.replaceInput(
        {mod:'magistuarmory'},`minecraft:${i}_ingot`,`gtceu:${i}_plate`)
      event.replaceInput(
        {mod:'magistuarmory'},`minecraft:${i}`,`gtceu:${i}_plate`)
      event.replaceInput(
        {mod:'magistuarmory'},`gtceu:${i}_ingot`,`gtceu:${i}_plate`)
      event.replaceInput(
        {mod:'magistuarmory'},`#minecraft:planks`,`gtceu:wood_plate`)
        event.replaceInput(
          {mod:'magistuarmory'},`#forge:cobblestone`,`gtceu:stone_plate`)
    
      
      }
      event.replaceInput({output:'minecraft:stone_sword'},'#minecraft:stone_crafting_materials','botania:livingrock')
  
  })
  ServerEvents.recipes(event => {
    event.forEachRecipe({ type:'minecraft:crafting_shaped', output: /(.*)slab(.*)/}, recipe => {
        let inputList = recipe.originalRecipeIngredients
        let input = inputList[0]
        if (input.getFirst().hasTag('forge:tools/saws')) { return }
        if (input.getFirst().hasTag('minecraft:slabs')) { return }
        let output = recipe.originalRecipeResult
        event.remove({id: recipe.getOrCreateId()})
        output = output.withCount(2)
        event.shapeless(output, [input,'#forge:tools/saws'])
    })})
    ServerEvents.recipes(event => {
      event.forEachRecipe({ type:'minecraft:crafting_shaped', output: /(.*)slab(.*)/}, recipe => {
          let inputList = recipe.originalRecipeIngredients
          let input = inputList[1]
          if (input.getFirst().hasTag('forge:tools/saws')) { return }
          if (input.getFirst().hasTag('minecraft:slabs')) { return }
          let output = recipe.originalRecipeResult
          event.remove({id: recipe.getOrCreateId()})
          output = output.withCount(2)
          event.shapeless(output, [input,'#forge:tools/saws'])
      })})
    
ServerEvents.recipes(event => {
  event.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' }, recipe => {
    let inputList = recipe.originalRecipeIngredients;
    if (inputList.size() > 1) return;
    
    let input = inputList[0];
    if (!input.getFirst().hasTag('minecraft:logs')) return;
    
    let output = recipe.originalRecipeResult.withCount(2);
    event.remove({ id: recipe.getOrCreateId() });
    event.shapeless(output, inputList);
    
    output = output.withCount(4);
    event.shapeless(output, [inputList, '#forge:tools/saws']);
    
    if (input.getFirst().hasTag('forge:stripped_wood') || input.getFirst().hasTag('forge:stripped_logs')) return;
    
    // 为木材生成各种衍生品
    let planksId = output.id;
    let fence = planksId.replace('planks', 'fence');
    let slab = planksId.replace('planks', 'slab');
    let fenceGate = planksId.replace('planks', 'fence_gate');
    let door = planksId.replace('planks', 'door');
    let trapdoor = planksId.replace('planks', 'trapdoor');
    let pressure = planksId.replace('planks', 'pressure_plate');
    let button = planksId.replace('planks', 'button');
  
    // 生成 fence
    if (Item.of(fence).isEmpty()) return;
    event.remove({ output: fence });
    event.shaped(Item.of(fence), ['ABA', 'ABA', 'ABA'], { A: output, B: 'minecraft:stick' });

    // 生成 fence_gate
    if (Item.of(fenceGate).isEmpty()) return;
    event.remove({ output: fenceGate });
    event.shaped(Item.of(fenceGate), ['C C', 'BAB', 'BAB'], { A: output, B: 'minecraft:stick', C: 'minecraft:flint' });

    // 生成 door
    if (Item.of(door).isEmpty()) return;
    event.remove({ output: door, type: 'minecraft:crafting_shaped' });
    event.shaped(Item.of(door), ['ABD', 'ACE', 'AAF'], {
      A: output, B: trapdoor, C: 'gtceu:iron_ring', D: '#forge:tools/screwdrivers',
      E: 'gtceu:iron_screw', F: '#forge:tools/saws'
    });

    // 生成 trapdoor
    if (Item.of(trapdoor).isEmpty()) return;
    event.remove({ output: trapdoor, type: 'minecraft:crafting_shaped' });
    event.shaped(Item.of(trapdoor), ['ABA', 'BBB', 'ABA'], { A: slab, B: 'minecraft:stick' });

    // 生成 pressure_plate
    if (Item.of(pressure).isEmpty()) return;
    event.remove({ output: pressure, type: 'minecraft:crafting_shaped' });
    event.shaped(Item.of(pressure, 2), ['ABA', 'CDC', 'AEA'], {
      A: 'gtceu:wood_bolt', B: '#forge:tools/mallets', C: slab,
      D: 'gtceu:iron_spring', E: '#forge:tools/screwdrivers'
    });

    // 生成 button
    if (Item.of(button).isEmpty()) return;
    event.remove({ output: button });
    event.shapeless(Item.of(button, 6), [pressure, '#forge:tools/saws']);
  });
});
  let wood =['rubber','aeronos','strophar','glacian','livingwood',
  'dreamwood','menril','ancient','archwood','twilight_oak','canopy',
  'mangrove','drak','time','transformation','mining','sorting',
  'driftwood','river','scorched','fir','redwood','cherry','mahogany',
  'jacaranda','palm','willow','dead','magic','umbran','hellbark']
  let mod =['gtceu','ad_astra','botania','intergrateddynamics',
  'natruresaura','ars_nouveau','twilightforest','upgrade_aquatic','born_in_chaos_v1','biomesoplenty']
  ServerEvents.recipes(event => {
    for(let w of wood){for(let m of mod){
      event.remove({output:`${m}:${w}_planks`})
  
  }}
  })
  
let color = ['black',
'white',
'orange',
'magenta',
'light_blue',
'light_gray',
'gray',
'cyan',
'purple',
'blue',
'brown',
'green',
'red',
'yellow',
'lime',
'pink']

ServerEvents.recipes(event => {
  event.remove({output:'elementalcraft:binder_improved' }) 
    event.remove({output:'minecraft:flint_and_steelz' }) 
    event.remove({output:'minecraft:furnace' }) 
    event.remove({output:'minecraft:blast_furnace' }) 
    event.remove({type:'blasting',output:'minecraft:charcoal' }) 
    event.remove({type:'smelting',output:'minecraft:charcoal' }) 
    event.remove({type:'minecraft:crafting_shaped',id:/minecraft:(.*)_bed/}) 
    event.remove({type:'minecraft:crafting_shaped',output:'minecraft:bucket' }) 
    event.remove({output:'industrialforegoing:diamond_gear'})
    event.remove({output:'industrialforegoing:iron_gear'})
    event.remove({output:'industrialforegoing:gold_gear'})
    event.remove({output:'#farmersdelight:tools/knives'})
    event.remove({mod:'buildinggadgets2'})
    event.remove({output:'ars_nouveau:source_gem'})
    event.remove({output:'gtceu:hp_steam_solid_boiler'})
    event.remove({output:'gtceu:steel_brick_casing'})
    event.remove({output:'gtceu:lp_steam_liquid_boiler'})
    event.remove({output:'gtceu:hp_steam_liquid_boiler'})
    event.remove({output:'gtceu:emerald_lens'})
    event.remove({output:'gtceu:diamond_lens'})
    event.remove({output:'gtceu:ruby_lens'})
    event.remove({output:'gtceu:sapphire_lens'})
    event.remove({output:'gtceu:nether_star_lens'})
    event.remove({output:'gtceu:glass_lens'})
    event.remove({type:'minecraft:crafting_shaped',output:'pneumaticcraft:ingot_iron_compressed'})
    event.remove({type:'minecraft:crafting_shaped',output:'pneumaticcraft:compressed_iron_block'})
    event.remove({type:'minecraft:crafting_shapeless',output:'pneumaticcraft:ingot_iron_compressed'})
    event.remove({type:'minecraft:crafting_shapeless',output:'pneumaticcraft:compressed_iron_block'})
    event.remove({id:'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
    event.remove({id:'pneumaticcraft:explosion_crafting/compressed_iron_block'})
    event.remove({id:'pneumaticcraft:explosion_crafting/wheat_flour'})
    event.remove({output:/ad_astra:desh_(.*)/})
    event.remove({id:'minecraft:amethyst_block'})

    event.remove({output:/twilightforest:ironwood_(.*)/})
    event.remove({output:'alexscaves:block_of_scarlet_neodymium'})
    event.remove({output:'alexscaves:block_of_azure_neodymium'})
    event.remove({output:'alexscaves:azure_neodymium_ingot'})
    event.remove({output:'alexscaves:scarlet_neodymium_ingot'})
    event.remove({type:'minecraft:smelting',output:'gtceu:azure_neodymium_ingot'})
    event.remove({type:'minecraft:smelting',output:'gtceu:scarlet_neodymium_ingot'})
    event.remove({type:'minecraft:blasting',output:'gtceu:azure_neodymium_ingot'})
    event.remove({type:'minecraft:blasting',output:'gtceu:scarlet_neodymium_ingot'})
    event.remove({output:'gtceu:lv_item_magnet'})
    event.remove({output:'gtceu:hv_item_magnet'})

    event.remove({type:'minecraft:crafting_shaped',output:'gtceu:primitive_pump'})
    event.remove({type:'minecraft:crafting_shaped',output:'gtceu:pump_hatch'})
    event.remove({type:'minecraft:crafting_shaped',output:'gtceu:pump_deck'})
    event.remove({type:'minecraft:crafting_shaped',output:'gtceu:pump_hatch'})
    event.remove({type:'minecraft:crafting_shaped',output:'gtceu:treated_wood_planks'})
    event.remove({type:'gtceu:electric_blast_furnace',output:'gtceu:arsenic_trioxide_dust'})
    event.remove({output:'eidolon:enchanted_ash' }) 
    event.remove({output:'ad_astra:iron_plate'})
    event.remove({output:'ad_astra:steel_plate'})
    event.remove({output:'ad_astra:steel_ingot'})
    event.remove({mod:"storagenetwork"})
    event.remove({mod:"avaritia"})
    event.remove({mod:"rftoolsbase"})
    event.remove({output:"pipez:wrench"})
    event.remove({output:"pipez:filter_destination_tool"})
    event.remove({output:"quark:iron_button"})
    event.remove({output:"quark:gold_button"})
    event.remove({output:"ae2:charger"})
    event.remove({output:"gtceu:hv_circuit_assembler"}) 
    event.remove({output:"gtceu:ev_circuit_assembler"}) 
    event.remove({output:"gtceu:iv_circuit_assembler"}) 
    event.remove({output:"gtceu:luv_circuit_assembler"}) 
    event.remove({output:"gtceu:zpm_circuit_assembler"}) 
    event.remove({output:"gtceu:uv_circuit_assembler"}) 
    event.remove({output:"ae2:inscriber"}) 
    event.remove({output:'ae2:quartz_glass'}) 
    event.remove({output:'ae2:quartz_vibrant_glass'}) 
    event.remove({output:'ae2:quartz_fixture'}) 
    event.remove({output:'ae2:sky_stone_chest'}) 
    event.remove({output:'ae2:smooth_sky_stone_chest'}) 
    event.remove({output:'ae2:sky_stone_tank'}) 
    event.remove({output:'ae2:wireless_access_point'}) 
    event.remove({output:'ae2:tiny_tnt'}) 
    event.remove({output:'ae2:security_station'}) 
    event.remove({output:'ae2:quantum_ring'}) 
    event.remove({output:"ae2:printed_calculation_processor"}) 
    event.remove({output:"ae2:printed_engineering_processor"}) 
    event.remove({output:"ae2:printed_logic_processor"}) 
    event.remove({output:"ae2:printed_silicon"}) 
    event.remove({output:"ae2:calculation_processor"}) 
    event.remove({output:"ae2:engineering_processor"}) 
    event.remove({output:"ae2:logic_processor"}) 
    event.remove({output:"elementalcraft:chisel"}) 
    event.remove({output:"rechiseled:chisel"}) 
    event.remove({output:'elementalcraft:crystallizer'}) 
    event.remove({output:'elementalcraft:inscriber'}) 
    event.remove({output:'elementalcraft:extractor'}) 
    event.remove({output:'elementalcraft:extractor_improved'}) 
event.remove({output:'elementalcraft:air_mill_grindstone'})
event.remove({output:'elementalcraft:drenched_saw_blade'})
event.remove({output:'elementalcraft:water_mill_wood_saw'})
event.remove({output:"botania:fertilizer"})
event.remove({output:'thermal:device_water_gen'})
event.remove({output:'botania:mana_spreader'})
event.remove({output:"botania:diluted_pool"})
event.remove({output:"botania:mana_pool"})
event.remove({output:"botania:manasteel_ingot"})
event.remove({output:"botania:manasteel_block"})
event.remove({output:"botania:elementium_ingot"})
event.remove({output:"botania:elementium_block"})
event.remove({output:"botania:mana_powder"})
event.remove({id:"botania:mana_infusion/mana_diamond"})
event.remove({id:"botania:mana_infusion/mana_diamond_block"})
event.remove({output:"hexerei:herb_drying_rack"})
event.remove({output:"integrateddynamics:drying_basin"})
event.remove({output:"integrateddynamics:mechanical_drying_basin"})
event.remove({output:"integrateddynamics:energy_battery"})
event.remove({output:"botania:mana_string"})
event.remove({output:"botania:manaweave_cloth"})
event.remove({output:"botania:mana_pearl"})
event.remove({output:'thermal:item_buffer'})
event.remove({output:"ae2:fluid_cell_housing"})
event.remove({output:"ae2:wireless_receiver"})
event.remove({output:"ae2:blank_pattern"})
event.remove({output:"ae2things:advanced_inscriber"})
event.remove({output:"ae2:wireless_booster"})
event.remove({output:"ae2:spatial_cell_component_2"})
event.remove({output:"ae2:spatial_cell_component_16"})
event.remove({output:"ae2:spatial_cell_component_128"})
event.remove({output:"ae2:wireless_crafting_terminal"})
event.remove({output:"ae2:color_applicator"})
event.remove({output:"ae2:matter_cannon"})
event.remove({output:"ae2:spatial_storage_cell_2"})
event.remove({output:"ae2:spatial_storage_cell_16"})
event.remove({output:"ae2:spatial_storage_cell_128"})
event.remove({output:"ae2:storage_bus"})
event.remove({output:"ae2:import_bus"})
event.remove({output:"ae2:export_bus"})
event.remove({output:"ae2:level_emitter"})
event.remove({output:"ae2:energy_level_emitter"})
event.remove({output:"ae2:advanced_card"})
event.remove({output:"ae2:redstone_card"})
event.remove({output:"ae2:capacity_card"})
event.remove({output:"ae2:void_card"})
event.remove({output:"ae2:redstone_card"})
event.remove({output:"ae2:crafting_card"})
event.remove({output:"ae2:fuzzy_card"})
event.remove({output:"ae2:speed_card"})
event.remove({output:"ae2:inverter_card"})
event.remove({output:"ae2:equal_distribution_card"})
event.remove({output:"ae2:energy_card"})
event.remove({output:"ae2:annihilation_plane"})
event.remove({output:"ae2:fluix_block"})
event.remove({output:"ae2:formation_plane"})
event.remove({output:"ae2:crafting_terminal"})
event.remove({output:"ae2:pattern_encoding_terminal"})
event.remove({output:"ae2:nether_quartz_cutting_knife"})
event.remove({id:"graveyard:dark_iron_ingot"})
event.remove({output:"ae2:certus_quartz_wrench"})
event.remove({output:"ae2:biometric_card"})
event.remove({id:"ae2:tools/network_memory_card"})
event.remove({output:"thermal:energy_cell_frame"})
event.remove({output:"thermal:fluid_cell_frame"})
event.remove({output:"thermal:energy_cell"})
event.remove({output:"thermal:fluid_cell"})
event.remove({output:"thermal:rubber"})
event.remove({output:"thermal:cured_rubber"})
event.remove({output:"thermal:obsidian_glass"})
event.remove({output:"thermal:device_rock_gen"})
event.remove({output:"thermal:device_collector"})
event.remove({output:"thermal:xp_crystal"})
event.remove({output:"thermal:device_xp_condenser"})
event.remove({output:"trashcans:item_trash_can"})
event.remove({output:"trashcans:liquid_trash_can"})
event.remove({output:"trashcans:energy_trash_can"})
event.remove({output:"thermal:device_nullifier"})
event.remove({output:"thermal:tinker_bench"})
event.remove({output:"thermal:charge_bench"})
event.remove({output:"thermal:device_potion_diffuser"})
event.remove({output:"thermal:upgrade_augment_1"})
event.remove({output:"thermal:upgrade_augment_2"})
event.remove({output:"thermal:upgrade_augment_3"})
event.remove({output:"thermal:flux_capacitor"})
event.remove({output:"thermal:flux_magnet"})
event.remove({output:"thermal:fluid_reservoir"})
event.remove({output:"thermal:potion_infuser"})
event.remove({output:"thermal:device_tree_extractor"})
event.remove({output:"thermal:device_fisher"})
event.remove({output:"thermal:potion_quiver"})
event.remove({output:"thermal:item_filter_augment"})
event.remove({output:"thermal:fluid_filter_augment"})
event.remove({output:"thermal:rf_potato"})
event.remove({output:"thermal:satchel"})
event.remove({output:"thermal:xp_storage_augment"})
event.remove({output:/thermal:(.*)_augment/})
event.remove({type:'thermal:centrifuge'})
event.remove({type:'thermal:pulverizer'})
event.remove({type:'thermal:press'})
event.remove({type:'thermal:smelter'})
event.remove({output:'botania:rune_water'})
event.remove({output:'botania:rune_fire'})
event.remove({output:'botania:rune_earth'})
event.remove({output:'botania:rune_air'})
event.remove({output:'minecraft:netherite_ingot'})
event.remove({output:'evilcraft:promise_acceptor_gold'})
event.remove({output:'evilcraft:bowl_of_promises_tier1'})
event.remove({output:'botania:runic_altar'})
event.remove({output:"create:dough"})
event.remove({output:"farmersdelight:wheat_dough"})
event.remove({output:"enderio:cake_base"})
event.remove({output:"enderio:flour"})
event.remove({output:"create:flour"})

event.remove({output:'ad_astra:hammer'})
event.remove({id:'minecraft:bread'})
event.remove({output:'ae2:basic_card'})
event.remove({output:"ae2:spatial_anchor"})
event.remove({output:"ae2:view_cell"})
event.remove({output:/ae2:item_storage_cell_(.*)/})
event.remove({output:/ae2:fluid_storage_cell_(.*)/})
event.remove({id:"ae2:transform/certus_quartz_crystals"})
event.remove({output:"ae2:wireless_terminal"})
event.remove({id:"ae2:network/parts/panels_semi_dark_monitor"})
event.remove({output:"ae2:terminal"})
event.remove({output:"ae2:charged_staff"})
event.remove({output:"ae2:certus_quartz_wrench"})
event.remove({output:"ae2:nether_quartz_wrench"})
event.remove({output:"minecraft:smithing_table"})
    event.remove({output:"ae2:cell_component_1k"}) 
    event.remove({output:"ae2:item_cell_housing"}) 
    event.remove({output:"ae2:quantum_link"}) 
    event.remove({id:"ae2:network/cables/dense_smart_fluix"}) 
    event.remove({id:"ae2:network/cables/smart_fluix"}) 
    event.remove({id:"ae2:network/cables/dense_smart_fluix"}) 
    event.remove({id:"ae2:network/cables/covered_fluix"}) 
    event.remove({id:"ae2:network/cables/glass_fluix"}) 
    event.remove({output:"ae2:spatial_pylon"}) 
    event.remove({output:"ae2:formation_core"}) 
    event.remove({output:"ae2:chest"}) 
    event.remove({output:"ae2:spatial_io_port"}) 
    event.remove({output:"ae2:controller"}) 
    event.remove({output:"ae2:drive"}) 
    event.remove({output:"ae2:interface"}) 
    event.remove({output:"ae2:cell_workbench"}) 
    event.remove({output:"ae2:io_port"}) 
    event.remove({output:"ae2:condenser"}) 
    event.remove({output:"ae2:energy_acceptor"}) 
    event.remove({output:"ae2:vibration_chamber"}) 
    event.remove({output:"ae2:quartz_growth_accelerator"}) 
    event.remove({output:"ae2:energy_cell"}) 
    event.remove({output:"ae2:dense_energy_cell"}) 
    event.remove({output:"ae2:crafting_unit"}) 
    event.remove({output:"ae2:crafting_accelerator"}) 
    event.remove({output:"ae2:molecular_assembler"}) 
    event.remove({output:"ae2:light_detector"}) 
    event.remove({output:"ae2:annihilation_core"}) 
    event.remove({output:"elementalcraft:infuser"}) 
    event.remove({output:"elementalcraft:swift_alloy_ingot"}) 
    event.remove({output:"elementalcraft:swift_alloy_nugget"}) 
    event.remove({output:"elementalcraft:swift_alloy_block"}) 

    event.remove({output:"gtceu:ev_machine_hull"}) 
    event.remove({output:"ae2:crank"}) 
    event.remove({output:"ae2:certus_quartz_axe"}) 
    event.remove({output:"ae2:nether_quartz_axe"}) 
    event.remove({output:"ae2:certus_quartz_pickaxe"}) 
    event.remove({output:"ae2:nether_quartz_pickaxe"}) 
    event.remove({output:"ae2:certus_quartz_shovel"}) 
    event.remove({output:"ae2:nether_quartz_shovel"}) 
    event.remove({output:"ae2:certus_quartz_hoe"}) 
    event.remove({output:"ae2:nether_quartz_hoe"}) 
    event.remove({output:"ae2:certus_quartz_sword"}) 
    event.remove({output:"ae2:nether_quartz_sword"}) 
    event.remove({type:"ae2:charger"}) 
    event.remove({output:"ae2:silicon"}) 
    event.remove({output:"ae2:fluix_pearl"}) 
    event.remove({output:"ae2:cell_component_4k"}) 
    event.remove({output:"ae2:cell_component_16k"}) 
    event.remove({output:"ae2:cell_component_64k"}) 
    event.remove({output:"ae2:cell_component_256k"}) 
    event.remove({output:"ae2:1k_crafting_storage"}) 
    event.remove({output:"ae2:4k_crafting_storage"}) 
    event.remove({output:"ae2:16k_crafting_storage"}) 
    event.remove({output:"ae2:64k_crafting_storage"}) 
    event.remove({output:"ae2:256k_crafting_storage"}) 
    event.remove({output:"ae2:crafting_monitor"}) 
    event.remove({id:"ae2:network/blocks/pattern_providers_interface"}) 
    event.remove({output:'ad_astra:compressor'})
    event.remove({output:'ad_astra:coal_generator'})
    event.remove({output:'ceramicbucket:unfired_clay_bucket'})
    event.remove({id:/aquaculture:(.*)_fillet_knife/})
    event.remove({id:"ae2:misc/vanilla_comparator"}) 
    event.remove({id:'ad_astra:recipes/iron_rod'}) 
    event.remove({output:'industrialforegoing:pitiful_generator'})
    event.remove({output:/industrialforegoing:mycelial_(.*)/}) 
    event.remove({output:'industrialforegoing:biofuel_generator'})
    event.remove({id:'culturadelights:jungle_planks'}) 
    event.remove({type:'minecraft:crafting_shapeless',output:'minecraft:bone_meal',not:{id:/gtceu(.*)/}})
    event.remove({id:'gtceu:shapeless/bone_to_bone_meal'})
    event.remove({output:'create:encased_fan'})
    event.remove({output:"reliquary:mob_charm"})
    event.remove({output:"reliquary:mob_charm_fragment"})
    event.remove({id:/create:(.*)cutting(.*)/}) 
    event.remove({id:"ae2:charger/charged_certus_quartz_crystal"}) 
    event.remove({output:"ae2:fluix_crystal"})
    event.remove({output:"industrialforegoing:dye_mixer"})
   //event.remove({output:'botanicadds:flowers/glaciflora'})
  //event.remove({output:'botanicadds:flowers/rainute'})
    event.remove({output:'botania:hydroangeas'})
   //event.remove({output:'botania:endoflame'})

    //event.remove({type:'create:basin'})
    //event.remove({type:'create:compacting'})
    //event.remove({type:'create:conversion'})
    //event.remove({type:'create:crushing'})
    //event.remove({type:'create:cutting'})
    //event.remove({type:"create:mixing"})
    event.remove({output:"nethersdelight:blackstone_furnace"})
    event.remove({output:"nethersdelight:blackstone_blast_furnace"})
    event.remove({output:"eidolon:pewter_blend"})
    event.remove({output:"eidolon:pewter_ingot"})
    event.remove({output:"eidolon:pewter_block"})
    event.remove({output:"eidolon:pewter_nugget"})

    event.remove({output:"eidolon:crucible"})
    event.remove({output:"gtceu:compressed_coke_clay"})
    event.remove({type:"minecraft:smelting",output:'#forge:gems',id:/gtceu(.*)/,not:{output:'minecraft:coal'}})
    event.remove({type:"minecraft:blasting",output:'#forge:gems',id:/gtceu(.*)/,not:{output:'minecraft:coal'}})
    event.remove({type:"minecraft:smelting",output:'#forge:dusts',id:/gtceu(.*)/})
    event.remove({type:"minecraft:blasting",output:'#forge:dusts',id:/gtceu(.*)/})
    event.remove({id:'gtceu:shaped/brick_from_water'}) 
    event.remove({id:'gtceu:shaped/bronze_bricks_hull'}) 
    event.remove({id:'gtceu:shaped/bronze_hull'}) 
    event.remove({id:'magistuarmory:steel_ring'}) 
    event.remove({id:'magistuarmory:leather_strip'}) 
    event.remove({id:'magistuarmory:hilt'}) 
    event.remove({output:'magistuarmory:woolen_fabric'})
    event.remove({id:'gtceu:shaped/gem_to_dust_flint_gem'})
    event.remove({output:"gtceu:compressed_clay"})
    event.remove({output:"thirst:clay_bowl"})
    event.remove({output:'gtceu:lp_steam_solid_boiler'})
    event.remove({id:'gtceu:shaped/fireclay_dust'})
    event.remove({output:'create:andesite_alloy'})
    event.remove({output:'eidolon:brazier'})
    event.remove({output:'thermal:redstone_servo'})
    event.remove({id:"cottonly:cotton_ball"})
    event.remove({id:"ad_astra:recipes/flint_and_steel"})
    event.remove({output:"create:andesite_alloy_block"})
    event.remove({output:"create:rose_quartz"})
    event.remove({output:"create:electron_tube"})
    event.remove({id:"farmersdelight:paper_from_tree_bark"})
    event.remove({output:"eidolon:stone_hand"})
    event.remove({output:"create:shaft"})
    event.remove({output:"create:windmill_bearing"})
    event.remove({output:"create:mechanical_bearing"})
    event.remove({output:"create:andesite_casing"})
    event.remove({output:"create:cogwheel"})
    event.remove({output:"create:large_cogwheel"})
    event.remove({id:"minecraft:white_wool_from_string"})
    event.remove({output:"create:copper_casing"})
    event.remove({id:'gtceu:shaped/electronic_circuit_lv'})
    event.remove({id:'gtceu:shaped/electronic_circuit_mv'})
    event.remove({output:"create:white_sail"})
    event.remove({output:"create:fluid_pipe"})
    event.remove({output:"create:mechanical_pump"})
    event.remove({output:"create:piston_extension_pole"})
    event.remove({output:"create:whisk"})
    event.remove({output:"create:mechanical_mixer"})
    event.remove({output:"create:brass_hand"})
    event.remove({output:"create:deployer"})
    event.remove({output:"create:steam_engine"})
    event.remove({output:"create:water_wheel"})
    event.remove({output:"create:large_water_wheel"})
    event.remove({id:'gtceu:shapeless/fireclay_dust'})
    event.remove({output:"create:crushing_wheel"})
    event.remove({output:"create:millstone"})
    event.remove({output:"create:empty_blaze_burner"})
    event.remove({output:"create:basin"})
    event.remove({type:"create:crushing"})
    event.remove({output:"create:brass_casing"})
    event.remove({output:"hexerei:mixing_cauldron"})
    event.remove({output:"born_in_chaos_v1:dark_metal_ingot"})
    event.remove({output:"born_in_chaos_v1:dark_metal_block"})
    event.remove({output:"ad_astra:space_helmet"})
    event.remove({output:"ad_astra:space_cuit"})
    event.remove({output:"ad_astra:space_pants"})
    event.remove({output:"ad_astra:space_boots"})
    event.remove({output:"ad_astra:gas_tank"})
    event.remove({output:"ad_astra:oxygen_gear"})
    event.remove({id:'cyclic:crafting/chest'})
    event.remove({output:"ars_nouveau:archwood_chest"})
    event.remove({output:"quark:pickarang"})
    event.remove({id:'blue_skies:jukebox_compat'})
    event.remove({output:"quark:obsidian_pressure_plate"})
    event.remove({id:'cyclic:crafting/repeater'})
    event.remove({output:'quark:redstone_randomizer'})
    event.remove({output:'minecraft:torch'})
    event.remove({output:'minecraft:soul_torch'})
    event.remove({output:'minecraft:lantern'})
    event.remove({output:'minecraft:soul_lantern'})
    event.remove({output:'minecraft:chain'})
    event.remove({output:'minecraft:end_rod'})
    event.remove({id:'minecraft:magma'})
    event.remove({id:'blue_skies:enchanting_table_compat'})
    event.remove({mod:'terralith'})

    event.remove({output:"create:mechanical_crafter"})
    event.remove({output:"create:crafter_slot_cover"})
    event.remove({output:"gtceu:lv_circuit_assembler"})
    event.remove({output:/thermal:machine(.*)/})
    event.remove({output:/thermal:dynamo(.*)/})
    event.remove({output:/thermal:press(.*)/})
    event.remove({output:/thermal:chiller(.*)/})
    event.remove({output:/thermal:(.*)duct(.*)/})
    event.remove({output:/thermal:(.*)attachment(.*)/})
    event.remove({output:/thermal:(.*)signalum(.*)/})
    event.remove({output:/thermal:(.*)lumium(.*)/})
    event.remove({output:/thermal:(.*)enderium(.*)/})
    event.remove({output:/thermal:(.*)invar(.*)/})
    event.remove({output:/thermal:(.*)apatite(.*)/})
    event.remove({output:/thermal:(.*)cinnabar(.*)/})
    event.remove({output:/thermal:(.*)niter(.*)/})
    event.remove({output:/thermal:(.*)sulfur(.*)/})
    event.remove({output:/thermal:(.*)sawdust(.*)/})
    event.remove({output:'thermal:drill_head'})
    event.remove({output:'thermal:saw_blade'})
    event.remove({output:'thermal:flux_drill'})
    event.remove({output:'thermal:flux_saw'})
    event.remove({output:'thermal:blizz_powder'})
    event.remove({output:'thermal:blitz_powder'})
    event.remove({output:'thermal:basalz_powder'})
    event.remove({id:'gtceu:smelting/dust_enderium__demagnetize_from_dust'})
    event.remove({id:'gtceu:smelting/dust_luminum__demagnetize_from_dust'})
    event.remove({id:'gtceu:smelting/dust_dark_metal__demagnetize_from_dust'})
    event.remove({output:"create:chute"})
    event.remove({output:"create:sequenced_gearshift"})
    event.remove({output:"thermal:rf_coil"})
    event.remove({type:"create:pressing"})
    event.remove({output:"create:mechanical_press"})
    event.remove({id:"create:crafting/kinetics/gearbox"})
    event.remove({output:"create:gearshift"})
    event.remove({output:"create:encased_chain_drive"})
    event.remove({output:"create:adjustable_chain_gearshift"})
    event.remove({output:"create:depot"})
    event.remove({output:"create:weighted_ejector"})
    event.remove({output:"create:smart_chute"})
    event.remove({id:"create:crafting/kinetics/speedometer"})
    event.remove({id:"create:crafting/kinetics/filter"})
    event.remove({id:"create:crafting/kinetics/attribute_filter"})
    event.remove({output:"create:smart_fluid_pipe"})
    event.remove({output:"create:fluid_valve"})
    event.remove({output:"create:fluid_tank"})
    event.remove({output:"create:hose_pulley"})
    event.remove({output:"create:item_drain"})
    event.remove({output:"create:spout"})
    event.remove({output:"create:portable_fluid_interface"})
    event.remove({output:"create:mechanical_piston"})
    event.remove({output:"create:gantry_carriage"})
    event.remove({output:"create:gantry_shaft"})
    event.remove({output:"create:clockwork_bearing"})
    event.remove({output:"create:rope_pulley"})
    event.remove({output:"create:elevator_pulley"})
    event.remove({output:"create:cart_assembler"})
    event.remove({output:"create:controller_rail"})
    event.remove({id:"create:crafting/kinetics/linear_chassis"})
    event.remove({id:"create:crafting/kinetics/radial_chassis"})
    event.remove({output:"create:sticker"})
    event.remove({output:"create:contraption_controls"})
    event.remove({output:"create:mechanical_saw"})
    event.remove({output:"create:mechanical_drill"})
    event.remove({output:"create:portable_storage_interface"})
    event.remove({output:"create:redstone_contact"})
    event.remove({output:"create:mechanical_plough"})
    event.remove({output:"create:mechanical_harvester"})
    event.remove({output:"create:mechanical_roller"})
    event.remove({output:"create:rotation_speed_controller"})
    event.remove({id:'gtceu:shaped/quartz_sand'})
    event.remove({output:"create:mechanical_arm"})
    event.remove({output:"create:track"})
    event.remove({id:'gtceu:macerator/macerate_obsidian'})
    event.remove({output:"minecraft:barrel"})
    event.remove({output:"create:track_station"})
    event.remove({output:"create:track_signal"})
    event.remove({output:"gtceu:obsidian_plate"})
    event.remove({output:"create:track_observer"})
    event.remove({output:"create:analog_lever"})
    event.remove({output:"create:controls"})
    event.remove({output:"create:item_vault"})
    event.remove({output:"create:andesite_funnel"})
    event.remove({output:"create:brass_funnel"})
    event.remove({output:"create:clutch"})
    event.remove({output:"create:andesite_tunnel"})
    event.remove({output:"create:brass_tunnel"})
    event.remove({output:"create:content_observer"})
    event.remove({output:"create:stockpile_switch"})
    event.remove({output:"create:display_link"})
    event.remove({output:"create:display_board"})
    event.remove({output:"create:nixie_tube"})
    event.remove({output:"create:redstone_link"})
    event.remove({output:"create:placard"})
    event.remove({output:"create:pulse_repeater"})
    event.remove({output:"create:pulse_extender"})
    event.remove({output:"create:powered_latch"})
    event.remove({output:"create:powered_toggle_latch"})
    event.remove({id:/create:(.*)_seat/})
    event.remove({id:/ad_astra:nasa_workbench(.*)/})
    event.remove({output:"ars_nouveau:source_gem_block"})
    event.remove({id:'ars_nouveau:imbuement_chamber'})
    event.remove({output:"eidolon:gold_inlay"})
    event.remove({id:"farmersdelight:book_from_canvas"})
    event.remove({output:"eidolon:pewter_inlay"})
    event.remove({output:"gtceu:lv_machine_hull"})
    event.remove({mod:'projecte'})
    event.remove({output:"gtceu:aluminium_ingot",type:"gtceu:electric_blast_furnace"})
    event.remove({output:"gtceu:aluminium_nugget",type:"gtceu:electric_blast_furnace"})
    event.remove({output:"integrateddynamics:squeezer"})
    event.remove({output:"integrateddynamics:mechanical_squeezer"})
    event.remove({output:"eidolon:crimson_essence"})
    event.remove({output:"eidolon:worktable"})
    event.remove({output:"evilcraft:blood_infusion_core"})
    event.remove({output:"evilcraft:dark_spike"})
    event.remove({output:"evilcraft:blood_infuser"})
    event.remove({output:"eidolon:wicked_weave"})
    event.remove({output:"evilcraft:dark_stick"})
    event.remove({output:"evilcraft:dark_power_gem"})
    event.remove({output:"evilcraft:bowl_of_promises_empty"})
    event.remove({output:"evilcraft:bowl_of_promises_dusted"})
    event.remove({output:"evilcraft:promise_acceptor_iron"})
    event.remove({output:"evilcraft:promise_tier_1"})
    event.remove({output:"evilcraft:bowl_of_promises_tier0"})
    event.remove({output:"gtceu:mv_machine_hull"})
    event.remove({output:"twilightforest:raw_ironwood"})
    event.remove({output:/twilightforest:fiery(.*)/})
    event.remove({output:"twilightforest:naga_chestplate"})
    event.remove({output:"twilightforest:naga_leggings"})
    event.remove({output:/twilightforest:ironwood_(.*)/})
    event.remove({output:/twilightforest:steeleaf_(.*)/})
    event.remove({output:"twilightforest:uncrafting_table"})
    event.remove({output:"twilightforest:steeleaf_helmet"})
    event.remove({output:"botania:pure_daisy"})
    event.remove({output:"elementalcraft:whiterock"})
    event.remove({output:'pipez:item_pipe'})
    event.remove({output:"pipez:fluid_pipe"})
    event.remove({output:"pipez:energy_pipe"})
    event.remove({output:/pipez:(.*)_upgrade/})
    event.remove({output:"elementalcraft:elementpipe_impaired"})
    event.remove({output:"elementalcraft:contained_crystal"})
    event.remove({output:"elementalcraft:inert_crystal"})
    event.remove({output:"gtceu:hv_machine_hull"})
    event.remove({id:"botania:pure_daisy/livingrock"})
    event.remove({id:"botania:pure_daisy/livingwood"})
    event.remove({output:"ad_astra:fuel_refinery"})
    event.remove({output:"gtceu:mv_circuit_assembler"})
    event.remove({id:"ad_astra:conversion/oxygen_from_water"})
    event.remove({output:"ad_astra:nasa_workbench"})
    event.remove({output:/ad_astra:tier_(.*)_rocket/})
    event.remove({output:"minecraft:lightning_rod"})
    event.remove({output:/hexerei:(.*)_chest/})
    event.remove({output:/twilightforest:(.*)_chest/})
    event.remove({output:/ad_astra:(.*)_chest/})
    event.remove({mod:'ironchest'})
    event.remove({output:"eidolon:arcane_gold_ingot"})
    event.remove({output:"eidolon:arcane_gold_block"})
    event.remove({output:"eidolon:arcane_gold_nugget"})

    event.remove({mod:'storagedrawers'})
    event.remove({output:/eidolon:silver_(.*)/})
    event.remove({output:'elementalcraft:elementpipe'})
    event.remove({output:'elementalcraft:elementpipe_improved'})
    event.remove({output:'elementalcraft:drenched_iron_ingot'})
    event.remove({output:'elementalcraft:drenched_iron_block'})
    event.remove({output:'elementalcraft:drenched_iron_nugget'})

    event.remove({output:"elementalcraft:evaporator"})
    event.remove({output:"elementalcraft:small_container"})
    event.remove({output:'elementalcraft:purecrystal'})
    event.remove({output:'elementalcraft:binder'})

})

let color = ['black',
'white',
'orange',
'magenta',
'light_blue',
'light_gray',
'gray',
'cyan',
'purple',
'blue',
'brown',
'green',
'red',
'yellow',
'lime',
'pink']
ServerEvents.recipes(event => {
    let idCounter = 0; // 计数器，用于生成唯一 ID

    function createUniqueId() {
        return `gtceu_cutter_${idCounter++}`; // 生成唯一的配方 ID
    }

    // 辅助函数，用于创建切割机配方
    function createCutterRecipe(event, input, output) {
        const fluids = [
            { fluid: 'minecraft:water 4', duration: 400 },
            { fluid: 'gtceu:distilled_water 3', duration: 300 },
            { fluid: 'gtceu:lubricant', duration: 200 }
        ];

        fluids.forEach(f => {
            event.recipes.gtceu.cutter(createUniqueId())
                .itemInputs(input)
                .itemOutputs(output)
                .inputFluids(f.fluid)
                .duration(f.duration)
                .EUt(7);
        });
    }

    // 处理 crafting_shapeless 类型的配方
    event.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' }, recipe => {
        let inputList = recipe.originalRecipeIngredients;
        if (inputList.size() > 1) return;
        
        let input = inputList[0];
        if (!input.getFirst().hasTag('minecraft:logs')) return;

        let output = recipe.originalRecipeResult.withCount(6);
        createCutterRecipe(event, input, output);
    });

    // 处理 crafting_shaped 类型的 slab 配方
    event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: /(.*)slab(.*)/ }, recipe => {
        let inputList = recipe.originalRecipeIngredients;

        [inputList[0], inputList[1]].forEach(input => {
            if (input.getFirst().hasTag('forge:tools/saws') || input.getFirst().hasTag('minecraft:slabs')) return;

            let output = recipe.originalRecipeResult.withCount(2);
            createCutterRecipe(event, input, output);
        });
    });
});ServerEvents.recipes(event => {
    event.recipes.gtceu.lathe('nether_star_lens')             
    .itemInputs('gtceu:nether_star_plate')
    .itemOutputs('gtceu:nether_star_lens')
    .duration(1200)
    .EUt(120)
    event.recipes.gtceu.lathe('diamond_lens')             
    .itemInputs('gtceu:exquisite_diamond_gem')
    .itemOutputs('gtceu:diamond_lens')
    .duration(1200)
    .EUt(120)
    event.recipes.gtceu.lathe('emerald_lens')             
    .itemInputs('gtceu:exquisite_emerald_gem')
    .itemOutputs('gtceu:emerald_lens')
    .duration(1200)
    .EUt(120)
    event.recipes.gtceu.lathe('ruby_lens')             
    .itemInputs('gtceu:exquisite_ruby_gem')
    .itemOutputs('gtceu:ruby_lens')
    .duration(1200)
    .EUt(120)
    event.recipes.gtceu.lathe('sapphire_lens')             
    .itemInputs('gtceu:exquisite_sapphire_gem')
    .itemOutputs('gtceu:sapphire_lens')
    .duration(1200)
    .EUt(120)
    event.recipes.gtceu.lathe('glass_lens')             
    .itemInputs('gtceu:exquisite_glass_gem')
    .itemOutputs('gtceu:glass_lens')
    .duration(1200)
    .EUt(120)
    event.recipes.gtceu.alloy_smelter('scarlet_neodymium_ingot')             
        .itemInputs('2x gtceu:magnetic_steel_dust', '2x tceu:scarlet_neodymium_dust')
        .itemOutputs('2x alexscaves:scarlet_neodymium_ingot')
        .duration(300)
        .EUt(16)
        event.recipes.gtceu.alloy_smelter('azure_neodymium_ingot')             
        .itemInputs('2x gtceu:magnetic_steel_dust', '2x gtceu:azure_neodymium_dust')
        .itemOutputs('2x alexscaves:azure_neodymium_ingot')
        .duration(300)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('andesite_alloy')             
        .itemInputs('2x gtceu:andesite_dust', 'minecraft:iron_ingot')
        .itemOutputs('create:andesite_alloy')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.alloy_smelter('quartzglass')             
        .itemInputs('#forge:glass', 'gtceu:certus_quartz_dust')
        .itemOutputs('ae2:quartz_glass')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.alloy_smelter('darkiron')             
        .itemInputs('gtceu:wrought_iron_ingot', '2x graveyard:corruption')
        .itemOutputs('graveyard:dark_iron_ingot')
        .duration(212)
        .EUt(120)
        event.recipes.gtceu.forge_hammer('moonstone_to_mooncobstone')             
        .itemInputs('ad_astra:moon_stone')
        .itemOutputs('ad_astra:moon_cobblestone')
        .duration(200)
        .EUt(60)
        event.recipes.gtceu.forge_hammer('mooncobstone_to_moonsand')             
        .itemInputs('ad_astra:moon_cobblestone')
        .itemOutputs('ad_astra:moon_sand')
        .duration(200)
        .EUt(60)
        event.recipes.gtceu.forge_hammer('moonsand_to_moondust')             
        .itemInputs('ad_astra:moon_sand')
        .itemOutputs('4x hexerei:moon_dust')
        .duration(200)
        .EUt(60)

        event.recipes.gtceu.alloy_smelter('fiery_ingot')             
        .itemInputs('gtceu:steel_ingot', '2x #twilightforest:fiery_vial')
        .itemOutputs('twilightforest:fiery_ingot')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.mixer('scarlet_neodymium_dust')    
        .itemInputs('5x gtceu:magnetic_neodymium_dust', '3x gtceu:red_alloy_dust')
        .itemOutputs('5x gtceu:scarlet_neodymium_dust')         
        .duration(366)
        .EUt(30)
        event.recipes.gtceu.mixer('azure_neodymium_dust')    
        .itemInputs('5x gtceu:magnetic_neodymium_dust', '3x gtceu:blue_alloy_dust')
        .itemOutputs('5x gtceu:azure_neodymium_dust')         
        .duration(366)
        .EUt(30)

        event.recipes.gtceu.mixer('astra_fuel')             
        .inputFluids('gtceu:cetane_boosted_diesel 10')
        .outputFluids('ad_astra:fuel 10')
        .duration(400)
        .EUt(480)
        event.recipes.gtceu.extractor('diamondd')             
        .itemInputs('gtceu:diamond_dust')
        .outputFluids('gtceu:diamondd 144')
        .duration(324)
        .EUt(120)
        event.recipes.gtceu.assembler('ae2pipe')             
        .itemInputs('4x gtceu:glass_plate','2x gtceu:certus_quartz_dust')
        .itemOutputs('2x ae2:quartz_fiber')
       .duration(200)
        .EUt(480)
        event.recipes.gtceu.assembler('ae2pipe1')             
        .itemInputs('ae2:quartz_fiber')
        .inputFluids('gtceu:fluix 288')
        .itemOutputs('ae2:fluix_glass_cable')
       .duration(200)
        .EUt(480)
        event.recipes.gtceu.assembler('ae2pipe2')             
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:rubber 144')
        .itemOutputs('ae2:fluix_covered_cable')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('ae2pipe3')             
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs('ae2:fluix_covered_cable')
       .duration(200)
        .EUt(120)

        event.recipes.gtceu.assembler('crafting_accelerator')             
        .itemInputs('ae2:crafting_unit','2x ae2:engineering_processor')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:crafting_accelerator')
        .duration(500)
        .EUt(120)
        event.recipes.gtceu.assembler('1kstorage')             
        .itemInputs('ae2:crafting_unit','ae2:cell_component_1k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:1k_crafting_storage')
        .duration(500)
        .EUt(120)
        event.recipes.gtceu.assembler('4kstorage')             
        .itemInputs('ae2:crafting_unit','ae2:cell_component_4k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:4k_crafting_storage')
        .duration(500)
        .EUt(120)
        event.recipes.gtceu.assembler('16kstorage')             
        .itemInputs('ae2:crafting_unit','ae2:cell_component_16k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:16k_crafting_storage')
        .duration(500)
        .EUt(120)
        event.recipes.gtceu.assembler('64kstorage')             
        .itemInputs('ae2:crafting_unit','ae2:cell_component_64k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:64k_crafting_storage')
        .duration(500)
        .EUt(120)
        event.recipes.gtceu.assembler('256kstorage')             
        .itemInputs('ae2:crafting_unit','ae2:cell_component_256k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:256k_crafting_storage')
        .duration(500)
        .EUt(120)
        event.recipes.gtceu.assembler('crtmonitor')             
        .itemInputs('ae2:crafting_unit','ae2:storage_monitor')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:crafting_monitor')
        .duration(500)
        .EUt(120)

        event.recipes.gtceu.assembler('ae2pipe4')             
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:styrene_butadiene_rubber 36')
        .itemOutputs('ae2:fluix_covered_cable')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('fluidstoragecell1')             
        .itemInputs('ae2:fluid_cell_housing','ae2:cell_component_1k')
        .inputFluids('gtceu:red_alloy 144')
        .itemOutputs('ae2:fluid_storage_cell_1k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('fluidstoragecell2')             
        .itemInputs('ae2:fluid_cell_housing','ae2:cell_component_4k')
        .inputFluids('gtceu:red_alloy 144')
        .itemOutputs('ae2:fluid_storage_cell_4k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('mechanical_bearing')             
        .itemInputs('#forge:slimeballs','4x gtceu:steel_plate','2x create:cogwheel','create:andesite_casing','2x create:shaft')
        .itemOutputs('create:mechanical_bearing')
       .duration(200)
        .EUt(7680)

        event.recipes.gtceu.assembler('fluidstoragecell3')             
        .itemInputs('ae2:fluid_cell_housing','ae2:cell_component_16k')
        .inputFluids('gtceu:red_alloy 144')
        .itemOutputs('ae2:fluid_storage_cell_16k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('fluidstoragecell4')             
        .itemInputs('ae2:fluid_cell_housing','ae2:cell_component_64k')
        .inputFluids('gtceu:red_alloy 144')
        .itemOutputs('ae2:fluid_storage_cell_64k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('fluidstoragecell5')             
        .itemInputs('ae2:fluid_cell_housing','ae2:cell_component_256k')
        .inputFluids('gtceu:red_alloy 144')
        .itemOutputs('ae2:fluid_storage_cell_256k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('itemstoragecell1')             
        .itemInputs('ae2:item_cell_housing','ae2:cell_component_1k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:item_storage_cell_1k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('itemstoragecell2')             
        .itemInputs('ae2:item_cell_housing','ae2:cell_component_4k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:item_storage_cell_4k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('itemstoragecell3')             
        .itemInputs('ae2:item_cell_housing','ae2:cell_component_16k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:item_storage_cell_16k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.electric_blast_furnace('darkemtal11')             
        .itemInputs('2x graveyard:dark_iron_ingot','born_in_chaos_v1:pileof_dark_metal')
        .inputFluids('gtceu:oxygen 300')
        .itemOutputs('2x born_in_chaos_v1:dark_metal_ingot')
        .duration(1000)
        .blastFurnaceTemp(1000)
        .EUt(120)
        event.recipes.gtceu.electric_blast_furnace('obsidianglass')             
        .itemInputs('gtceu:glass_dust','gtceu:obsidian_dust','gtceu:nether_quartz_dust')
        .itemOutputs('thermal:obsidian_glass')
        .duration(400)
        .blastFurnaceTemp(1000)
        .EUt(120)
        event.recipes.gtceu.electric_blast_furnace('signalumglass')             
        .itemInputs('gtceu:glass_dust','gtceu:signalum_dust','gtceu:nether_quartz_dust')
        .itemOutputs('thermal:signalum_glass')
        .duration(600)
        .blastFurnaceTemp(1000)
        .EUt(120)
        event.recipes.gtceu.electric_blast_furnace('netherite_ingot')             
        .itemInputs('4x minecraft:netherite_scrap','4x gtceu:gold_dust')
        .itemOutputs('minecraft:netherite_ingot')
        .inputFluids('gtceu:nether_air 10000')
        .duration(2000)
        .blastFurnaceTemp(1000)
        .EUt(120)
        event.recipes.gtceu.chemical_reactor('ender_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x gtceu:ender_pearl_dust")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:ender_tnt")
        .duration(4000)
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('glowstone_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x minecraft:glowstone_dust")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:glowstone_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('redstone_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x minecraft:redstone")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:redstone_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('slime_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x minecraft:slime_ball")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:slime_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('fire_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x minecraft:blaze_powder")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:fire_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('ice_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x thermal:blizz_powder")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:ice_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('lighting_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x thermal:blitz_powder")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:lighting_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.chemical_reactor('earth_tnt')
        .itemInputs("4x gtceu:gelled_toluene","4x thermal:basalz_powder")
        .inputFluids('gtceu:sulfuric_acid 250')
        .itemOutputs("thermal:earth_tnt")
        .duration(4000) 
        .EUt(48)
        
        event.recipes.gtceu.electric_blast_furnace('lumiumglass')             
        .itemInputs('gtceu:glass_dust','gtceu:lumium_dust','gtceu:nether_quartz_dust')
        .itemOutputs('thermal:lumium_glass')
        .duration(600)
        .blastFurnaceTemp(1000)
        .EUt(400)
        event.recipes.gtceu.electric_blast_furnace('enderiumglass')             
        .itemInputs('gtceu:glass_dust','gtceu:enderium_dust','gtceu:nether_quartz_dust')
        .itemOutputs('thermal:enderium_glass')
        .duration(600)
        .blastFurnaceTemp(2000)
        .EUt(1200)

        event.recipes.gtceu.assembler('itemstoragecell4')             
        .itemInputs('ae2:item_cell_housing','ae2:cell_component_64k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:item_storage_cell_64k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('itemstoragecell5')             
        .itemInputs('ae2:item_cell_housing','ae2:cell_component_256k')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:item_storage_cell_256k')
       .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('spastoragecell1')             
        .itemInputs('ae2:item_cell_housing','ae2:spatial_cell_component_2')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:spatial_storage_cell_2')
        .duration(1000)
        .EUt(400)
        event.recipes.gtceu.assembler('spastoragecell2')             
        .itemInputs('ae2:item_cell_housing','ae2:spatial_cell_component_16')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:spatial_storage_cell_16')
        .duration(1000)
        .EUt(400)
        event.recipes.gtceu.assembler('spastoragecell3')             
        .itemInputs('ae2:item_cell_housing','ae2:spatial_cell_component_128')
        .inputFluids('gtceu:blue_alloy 144')
        .itemOutputs('ae2:spatial_storage_cell_128')
        .duration(1000)
        .EUt(400)

        event.recipes.gtceu.alloy_smelter('earth_shard')             
        .itemInputs('#minecraft:saplings', 'minecraft:grass_block')
        .itemOutputs('2x elementalcraft:earth_shard')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.bender('dense_obsidian')             
        .itemInputs('9x gtceu:obsidian_plate')
        .itemOutputs('gtceu:dense_obsidian_plate')
        .duration(2000)
        .EUt(120)
        .circuit(9)
        event.recipes.gtceu.chemical_bath('c_inert_crystal1')             
        .itemInputs("gtceu:flawless_certus_quartz_gem")
        .inputFluids('gtceu:helium 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(300)
        .EUt(120)
        event.recipes.gtceu.chemical_bath('c_inert_crystal2')             
        .itemInputs("gtceu:flawless_nether_quartz_gem")
        .inputFluids('gtceu:helium 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(300)
        .EUt(120)
        event.recipes.gtceu.chemical_bath('c_inert_crystal3')             
        .itemInputs("gtceu:flawless_quartzite_gem")
        .inputFluids('gtceu:helium 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(300)
        .EUt(120)
        event.recipes.gtceu.chemical_bath('c_inert_crystal4')             
        .itemInputs("gtceu:flawless_ice_shard_gem")
        .inputFluids('gtceu:helium 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(300)
        .EUt(120)

        event.recipes.gtceu.compressor('obsidian_plate')             
        .itemInputs('gtceu:obsidian_dust')
        .itemOutputs('gtceu:obsidian_plate')
        .duration(600)
        .EUt(120)
        event.recipes.gtceu.chemical_bath('bloodycobblestone')             
        .itemInputs('minecraft:mossy_cobblestone')
        .inputFluids('evilcraft:blood 1000')
        .itemOutputs('evilcraft:bloody_cobblestone')
        .duration(600)
        .EUt(30)
        event.recipes.gtceu.chemical_reactor('fire_shard')             
        .itemInputs('minecraft:blaze_powder')
        .inputFluids('minecraft:lava 200')
        .itemOutputs('2x elementalcraft:fire_shard')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.chemical_reactor('contained_crystal')             
        .itemInputs('elementalcraft:inert_crystal')
        .inputFluids('gtceu:arcane_gold 144')
        .itemOutputs('elementalcraft:contained_crystal')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.chemical_reactor('limewater')             
        .itemInputs("gtceu:quicklime_dust")
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:lime_water 1000')
        .duration(200)
        .EUt(30)
        for(let c of color){
            event.recipes.gtceu.chemical_reactor(`magical${c}petal`)             
            .itemInputs(`#botania:petals/${c}`)
            .inputFluids(`gtceu:${c}_dye 144`)
            .itemOutputs(`kubejs:${c}_petal`)
            .duration(200)
            .EUt(30)    
        }
        event.recipes.gtceu.chemical_reactor('quartzvibrantglass')             
        .itemInputs("ae2:quartz_glass")
        .inputFluids('gtceu:glowstone 288')
        .itemOutputs('ae2:quartz_vibrant_glass')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.cutter('tiny_tnt')             
        .itemInputs("minecraft:tnt")
        .itemOutputs('4x ae2:tiny_tnt')
        .duration(7238)
        .EUt(1200)
        event.recipes.gtceu.mixer('wheat_dough')             
        .itemInputs("3x gtceu:wheat_dust",'#forge:eggs')
        .itemOutputs('3x farmersdelight:wheat_dough')
        .inputFluids('minecraft:water 1000')
        .duration(200)
        .EUt(30)

        event.recipes.gtceu.mixer('huafei')             
        .itemInputs("minecraft:bone_meal",'4x #botania:petals')
        .itemOutputs('botania:fertilizer')
        .duration(122)
        .EUt(30)
        event.recipes.gtceu.centrifuge('mana')             
        .itemInputs('gtceu:manasteel_dust')
        .itemOutputs('gtceu:iron_dust')
        .outputFluids('gtceu:mana 1000')
        .duration(456)
        .EUt(400)
        event.recipes.gtceu.polarizer('infused_enderpearl')             
        .itemInputs('minecraft:ender_pearl')
        .itemOutputs('rftoolsbase:infused_enderpearl')
        .duration(374)
        .EUt(400)
        event.recipes.gtceu.polarizer('infused_diamond')             
        .itemInputs('gtceu:flawless_diamond_gem')
        .itemOutputs('rftoolsbase:infused_diamond')
        .duration(586)
        .EUt(400)
        event.recipes.gtceu.extractor('menril_resin')             
        .itemInputs('integrateddynamics:crystalized_menril_chunk')
        .outputFluids('integrateddynamics:menril_resin 100')
        .duration(500)
        .EUt(100)
        event.recipes.gtceu.extractor('menril_resin1')             
        .itemInputs('integrateddynamics:menril_berries')
        .outputFluids('integrateddynamics:menril_resin 20')
        .duration(200)
        .EUt(100)
        event.recipes.gtceu.extractor('menril_resin2')             
        .itemInputs('integrateddynamics:menril_log')
        .outputFluids('integrateddynamics:menril_resin 10')
        .duration(500)
        .EUt(100)
        event.recipes.gtceu.assembler('menril_battery')             
        .itemInputs('gtceu:hv_battery_buffer_4x','4x #gtceu:batteries/hv')
        .inputFluids('integrateddynamics:menril_resin 3000')
        .itemOutputs("integrateddynamics:energy_battery")
        .duration(347)
        .EUt(100)

        event.recipes.gtceu.chemical_bath('mana_pearl')             
        .itemInputs('rftoolsbase:infused_enderpearl')
        .inputFluids('gtceu:mana 2000')
        .itemOutputs('botania:mana_pearl')
        .duration(411)
        .EUt(400)
        event.recipes.gtceu.chemical_bath('mana_diamond')             
        .itemInputs('rftoolsbase:infused_diamond')
        .inputFluids('gtceu:mana 4000')
        .itemOutputs('botania:mana_diamond')
        .duration(411)
        .EUt(400)
        event.recipes.gtceu.chemical_bath('manastring')             
        .itemInputs('minecraft:string')
        .inputFluids('gtceu:mana 1500')
        .itemOutputs('botania:mana_string')
        .duration(223)
        .EUt(400)

        event.recipes.gtceu.chemical_reactor('tannic_acid')             
        .itemInputs("2x gtceu:wood_dust")
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:tannic_acid 1000')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.chemical_reactor('crystal_cetus')             
        .itemInputs('gtceu:certus_quartz_gem','#forge:dusts/certus_quartz')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('ae2:certus_quartz_crystal')
        .duration(452)
        .EUt(480)
        event.recipes.gtceu.chemical_bath('soaked_leather')             
        .itemInputs('4x minecraft:leather')
        .inputFluids('gtceu:lime_water 1000')
        .itemOutputs('4x kubejs:soaked_leather')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.cutter('scraped_leather')             
        .itemInputs("4x kubejs:soaked_leather")
        .itemOutputs('4x kubejs:scraped_leather')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.chemical_bath('prepared_leather')             
        .itemInputs("4x kubejs:scraped_leather")
        .inputFluids('gtceu:tannic_acid 1000')
        .itemOutputs('4x kubejs:prepared_leather')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.chemical_reactor('drawerup4')             
        .itemInputs('storagedrawers:gold_storage_upgrade','2x gtceu:double_bloodinum_plate')
        .inputFluids('gtceu:aluminium 576')
        .itemOutputs('storagedrawers:diamond_storage_upgrade')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.assembler('export_kabel')             
        .itemInputs('storagenetwork:kabel','#gtceu:circuits/lv','gtceu:mv_conveyor_module')
        .itemOutputs('storagenetwork:export_kabel')
       .duration(200)
        .EUt(120)
        .circuit(1)
        event.recipes.gtceu.polarizer('cqq')             
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(266)
        .EUt(480)
        event.recipes.gtceu.circuit_assembler('v2process')             
        .itemInputs('ae2:printed_calculation_processor','2x ae2:calculation_processor','4x #gtceu:diodes','16x gtceu:fluix_bolt','16x gtceu:fine_black_steel_wire','4x gtceu:ram_chip')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('kubejs:calculation_processor_v2')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('v2process1')             
        .itemInputs('ae2:printed_calculation_processor','2x ae2:calculation_processor','4x #gtceu:diodes','16x gtceu:fluix_bolt','16x gtceu:fine_black_steel_wire','4x gtceu:ram_chip')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('kubejs:calculation_processor_v2')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('v3process')             
        .itemInputs('2x gtceu:polytetrafluoroethylene_frame','2x kubejs:calculation_processor_v2','8x #gtceu:inductors','16x #gtceu:capacitors','16x gtceu:ram_chip','16x gtceu:kanthal_single_wire')
        .inputFluids('gtceu:tin 576')
        .itemOutputs('kubejs:calculation_processor_v3')
        .duration(500)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(480)
        event.recipes.gtceu.circuit_assembler('v3process1')             
        .itemInputs('2x gtceu:polytetrafluoroethylene_frame','2x kubejs:calculation_processor_v2','8x #gtceu:inductors','16x #gtceu:capacitors','16x gtceu:ram_chip','16x gtceu:kanthal_single_wire')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('kubejs:calculation_processor_v3')
        .duration(500)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(480)
        event.recipes.gtceu.circuit_assembler('v4process')             
        .itemInputs('2x gtceu:tungsten_steel_frame','2x kubejs:calculation_processor_v3','16x gtceu:smd_inductor','32x gtceu:smd_capacitor','16x gtceu:ram_chip','16x gtceu:nichrome_single_wire')
        .inputFluids('gtceu:tin 576')
        .itemOutputs('kubejs:calculation_processor_v4')
        .duration(1000)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(1920)
        event.recipes.gtceu.circuit_assembler('v4process1')             
        .itemInputs('2x gtceu:tungsten_steel_frame','2x kubejs:calculation_processor_v3','16x gtceu:smd_inductor','32x gtceu:smd_capacitor','16x gtceu:ram_chip','16x gtceu:nichrome_single_wire')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('kubejs:calculation_processor_v4')
        .duration(1000)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(1920)
        event.recipes.gtceu.circuit_assembler('v5process')             
        .itemInputs('2x gtceu:hsss_frame','2x kubejs:calculation_processor_v4','24x gtceu:smd_inductor','48x gtceu:smd_capacitor','24x gtceu:ram_chip','48x gtceu:niobium_titanium_single_wire')
        .inputFluids('gtceu:tin 576')
        .itemOutputs('kubejs:calculation_processor_v5')
        .duration(1500)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(7680)
        event.recipes.gtceu.circuit_assembler('v5process1')             
        .itemInputs('2x gtceu:hsss_frame','2x kubejs:calculation_processor_v4','24x gtceu:smd_inductor','48x gtceu:smd_capacitor','24x gtceu:ram_chip','48x gtceu:niobium_titanium_single_wire')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('kubejs:calculation_processor_v5')
        .duration(1500)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(7680)

        event.recipes.gtceu.circuit_assembler('ae2egproses1')             
        .itemInputs('ae2:printed_calculation_processor','ae2:printed_silicon','4x #gtceu:transistors','4x #gtceu:capacitors','4x #gtceu:resistors','8x gtceu:fine_blue_alloy_wire')
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x ae2:calculation_processor')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('ae2egproses2')             
        .itemInputs('ae2:printed_calculation_processor','ae2:printed_silicon','4x #gtceu:transistors','4x #gtceu:capacitors','4x #gtceu:resistors','8x gtceu:fine_blue_alloy_wire')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x ae2:calculation_processor')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('ae2egproses3')             
        .itemInputs('ae2:printed_engineering_processor','ae2:printed_silicon','4x #gtceu:transistors','4x #gtceu:capacitors','4x #gtceu:resistors','8x gtceu:fine_blue_alloy_wire')
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x ae2:engineering_processor')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('ae2egproses4')             
        .itemInputs('ae2:printed_engineering_processor','ae2:printed_silicon','4x #gtceu:transistors','4x #gtceu:capacitors','4x #gtceu:resistors','8x gtceu:fine_blue_alloy_wire')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x ae2:engineering_processor')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('ae2egproses5')             
        .itemInputs('ae2:printed_logic_processor','ae2:printed_silicon','4x #gtceu:transistors','4x #gtceu:capacitors','4x #gtceu:resistors','8x gtceu:fine_blue_alloy_wire')
        .inputFluids('gtceu:tin 144')
        .itemOutputs('2x ae2:logic_processor')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.circuit_assembler('ae2egproses6')             
        .itemInputs('ae2:printed_logic_processor','ae2:printed_silicon','4x #gtceu:transistors','4x #gtceu:capacitors','4x #gtceu:resistors','8x gtceu:fine_blue_alloy_wire')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('2x ae2:logic_processor')
        .duration(200)
        .EUt(120)

        event.recipes.gtceu.assembler('import_kabel')             
        .itemInputs('storagenetwork:kabel','#gtceu:circuits/lv','gtceu:mv_conveyor_module')
        .itemOutputs('storagenetwork:import_kabel')
       .duration(200)
        .EUt(120)
        .circuit(2)
        event.recipes.gtceu.assembler('storage_kabel')             
        .itemInputs('storagenetwork:import_kabel','storagenetwork:export_kabel','gtceu:mv_input_bus','gtceu:mv_output_bus','#gtceu:circuits/mv')
        .inputFluids('gtceu:diamondd 1152')
        .itemOutputs('2x storagenetwork:storage_kabel')
        .duration(1000)
        .EUt(120)
        event.recipes.gtceu.alloy_smelter('rose_quartz')             
        .itemInputs('4x minecraft:redstone', 'minecraft:quartz')
        .itemOutputs('create:rose_quartz')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.cutter('shaft1')             
        .itemInputs('create:andesite_alloy_block')
        .inputFluids('minecraft:water 200')
        .itemOutputs('8x create:shaft')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.cutter('shaft2')             
        .itemInputs('create:andesite_alloy_block')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('8x create:shaft')
       .duration(200)
        .EUt(30)
        event.recipes.gtceu.cutter('shaft3')             
        .itemInputs('create:andesite_alloy_block')
        .inputFluids('gtceu:lubricant 50')
        .itemOutputs('8x create:shaft')
        .duration(50)
        .EUt(30)
        event.recipes.gtceu.assembler('andesite_casing')             
        .itemInputs('4x gtceu:andesite_alloy_plate','4x gtceu:treated_wood_plate')
        .itemOutputs('create:andesite_casing')
        .duration(50)
        .EUt(16)
        .circuit(8)
        event.recipes.gtceu.assembler('brass_casing')             
        .itemInputs('2x gtceu:brass_plate','4x gtceu:treated_wood_plate','2x gtceu:arcane_gold_plate')
        .itemOutputs('create:brass_casing')
        .duration(50)
        .EUt(16)
        .circuit(8)
        event.recipes.gtceu.assembler('copper_casing')             
        .itemInputs('4x gtceu:copper_plate','4x gtceu:treated_wood_plate')
        .itemOutputs('create:copper_casing')
        .duration(50)
        .EUt(16)
        .circuit(8)
        event.recipes.gtceu.assembler('mechanical_pump')             
        .itemInputs('2x gtceu:copper_plate','2x gtceu:andesite_alloy_rotor','create:fluid_pipe')
        .itemOutputs('create:mechanical_pump')
        .duration(50)
        .EUt(16)
        .circuit(2)
        event.recipes.gtceu.assembler('controller_rail')             
        .itemInputs('12x gtceu:gold_rod','minecraft:stick','create:electron_tube')
        .itemOutputs('6x create:controller_rail')
       .duration(200)
        .EUt(30)
        .circuit(1)
        event.recipes.gtceu.macerator('treated_wood_dust')             
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('gtceu:treated_wood_dust')
       .duration(200)
        .EUt(2)

        event.recipes.gtceu.macerator('ice_shard_dust')             
        .itemInputs('ad_astra:ice_shard')
        .itemOutputs('gtceu:small_ice_shard_dust')
        .duration(200)
        .EUt(2)
        event.recipes.gtceu.macerator('ice_shard')             
        .itemInputs('ad_astra:ice_shard')
        .itemOutputs('gtceu:small_ice_shard_dust')
        .duration(200)
        .EUt(2)

        event.recipes.gtceu.macerator('cinder_flour')             
        .itemInputs('minecraft:red_nether_bricks')
        .itemOutputs('create:cinder_flour')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.macerator('dark_gem_curshed')             
        .itemInputs('evilcraft:dark_power_gem')
        .itemOutputs('evilcraft:dark_gem_crushed')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.assembler('lantern')             
        .itemInputs('minecraft:chain','5x gtceu:iron_rod','minecraft:torch')
        .itemOutputs('minecraft:lantern')
        .duration(200)
        .EUt(16)
        .circuit(2)

        event.recipes.gtceu.assembler('soul_lantern')             
        .itemInputs('minecraft:chain','5x gtceu:iron_rod','minecraft:soul_torch')
        .itemOutputs('minecraft:soul_lantern')
        .duration(200)
        .EUt(16)
        .circuit(2)

        event.recipes.gtceu.assembler('chain')             
        .itemInputs('3x gtceu:iron_rod')
        .itemOutputs('minecraft:chain')
        .duration(200)
        .EUt(16)
        .circuit(1)

        event.recipes.gtceu.assembler('mixing_cauldron')             
        .itemInputs('5x gtceu:dark_metal_plate','eidolon:crucible','2x minecraft:hopper','2x #gtceu:circuits/lv')
        .itemOutputs('hexerei:mixing_cauldron')
        .duration(200)
        .EUt(16)
        .circuit(4)
        event.recipes.gtceu.primitive_blast_furnace('dark_metal_ingot_primal')             
        .itemInputs('gtceu:steel_ingot','born_in_chaos_v1:pileof_dark_metal','2x eidolon:enchanted_ash')
        .itemOutputs('born_in_chaos_v1:dark_metal_ingot')
        .duration(3000)
        event.recipes.gtceu.electric_blast_furnace('dark_metal_ingot')             
        .itemInputs('gtceu:steel_ingot','born_in_chaos_v1:pileof_dark_metal','eidolon:enchanted_ash')
        .itemOutputs('born_in_chaos_v1:dark_metal_ingot')
        .duration(1000)
        .EUt(120)
        .blastFurnaceTemp(1000)
        .circuit(1)
        event.recipes.gtceu.electric_blast_furnace('dark_metal_ingot1')             
        .itemInputs('gtceu:steel_ingot','born_in_chaos_v1:pileof_dark_metal','eidolon:enchanted_ash')
        .inputFluids('gtceu:oxygen 200')
        .itemOutputs('born_in_chaos_v1:dark_metal_ingot')
        .duration(800)
        .EUt(120)
        .blastFurnaceTemp(1000)
        .circuit(2)
        event.recipes.gtceu.electric_blast_furnace('bowl_of_promises')             
        .itemInputs('thirst:clay_bowl','3x evilcraft:dark_gem_crushed')
        .inputFluids('evilcraft:blood 1000')
        .itemOutputs('evilcraft:bowl_of_promises_empty')
        .duration(600)
        .EUt(120)
        .blastFurnaceTemp(1000)
        event.recipes.gtceu.electric_blast_furnace('bloodinum1')             
        .itemInputs('gtceu:bloodinum_dust','2x eidolon:crimson_essence')
        .inputFluids('evilcraft:blood 1000')
        .itemOutputs('gtceu:bloodinum_ingot')
        .duration(1000)
        .EUt(120)
        .blastFurnaceTemp(1000)
        .circuit(2)
        event.recipes.gtceu.electric_blast_furnace('bloodinum')             
        .itemInputs('gtceu:bloodinum_dust','2x eidolon:crimson_essence')
        .itemOutputs('gtceu:bloodinum_ingot')
        .duration(1578)
        .EUt(120)
        .blastFurnaceTemp(1000)
        .circuit(1)
        event.recipes.gtceu.autoclave('pure_daisy')             
        .itemInputs('kubejs:bloody_rose','20x eidolon:enchanted_ash')
        .inputFluids('gtceu:white_dye 2304')
        .itemOutputs('botania:pure_daisy')
        .duration(600)
        .EUt(30)
        event.recipes.gtceu.autoclave('1inert_crystal1')             
        .itemInputs('gtceu:nether_quartz_dust')
        .inputFluids('gtceu:neon 10')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('1inert_crystal2')             
        .itemInputs('gtceu:certus_quartz_dust')
        .inputFluids('gtceu:neon 10')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('1inert_crystal3')             
        .itemInputs('gtceu:quartzite_dust')
        .inputFluids('gtceu:neon 10')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('1inert_crystal4')             
        .itemInputs('gtceu:ice_shard_dust')
        .inputFluids('gtceu:neon 10')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('2inert_crystal1')             
        .itemInputs('gtceu:nether_quartz_dust')
        .inputFluids('gtceu:helium_3 5')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('2inert_crystal2')             
        .itemInputs('gtceu:certus_quartz_dust')
        .inputFluids('gtceu:helium_3 5')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('2inert_crystal3')             
        .itemInputs('gtceu:quartzite_dust')
        .inputFluids('gtceu:helium_3 5')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('2inert_crystal4')             
        .itemInputs('gtceu:ice_shard_dust')
        .inputFluids('gtceu:helium_3 5')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('3inert_crystal1')             
        .itemInputs('gtceu:nether_quartz_dust')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('3inert_crystal2')             
        .itemInputs('gtceu:certus_quartz_dust')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('3inert_crystal3')             
        .itemInputs('gtceu:quartzite_dust')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('3inert_crystal4')             
        .itemInputs('gtceu:ice_shard_dust')
        .inputFluids('gtceu:argon 100')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('4inert_crystal1')             
        .itemInputs('gtceu:nether_quartz_dust')
        .inputFluids('gtceu:krypton 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('4inert_crystal2')             
        .itemInputs('gtceu:certus_quartz_dust')
        .inputFluids('gtceu:krypton 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('4inert_crystal3')             
        .itemInputs('gtceu:quartzite_dust')
        .inputFluids('gtceu:krypton 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('4inert_crystal4')             
        .itemInputs('gtceu:ice_shard_dust')
        .inputFluids('gtceu:krypton 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('6inert_crystal1')             
        .itemInputs('gtceu:nether_quartz_dust')
        .inputFluids('gtceu:xenon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('6inert_crystal2')             
        .itemInputs('gtceu:certus_quartz_dust')
        .inputFluids('gtceu:xenon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('6inert_crystal3')             
        .itemInputs('gtceu:quartzite_dust')
        .inputFluids('gtceu:xenon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('6inert_crystal4')             
        .itemInputs('gtceu:ice_shard_dust')
        .inputFluids('gtceu:xenon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('5inert_crystal1')             
        .itemInputs('gtceu:nether_quartz_dust')
        .inputFluids('gtceu:radon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('5inert_crystal2')             
        .itemInputs('gtceu:certus_quartz_dust')
        .inputFluids('gtceu:radon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('5inert_crystal3')             
        .itemInputs('gtceu:quartzite_dust')
        .inputFluids('gtceu:radon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.autoclave('5inert_crystal4')             
        .itemInputs('gtceu:ice_shard_dust')
        .inputFluids('gtceu:radon 1')
        .itemOutputs('elementalcraft:inert_crystal')
        .duration(345)
        .EUt(400)
        event.recipes.gtceu.centrifuge('blood1')             
        .itemInputs('#forge:meat/raw')
        .outputFluids("evilcraft:blood 100")
        .duration(234)
        .EUt(30)
        event.recipes.gtceu.centrifuge('blood2')             
        .itemInputs("minecraft:rotten_flesh")
        .outputFluids("evilcraft:blood 10")
        .duration(234)
        .EUt(30)
        event.recipes.gtceu.autoclave('air_shard')             
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x elementalcraft:air_shard')
        .duration(200)
        .EUt(30)

        event.recipes.gtceu.assembler('electron_tube')             
        .itemInputs('4x create:polished_rose_quartz','4x #gtceu:circuits/ulv')
        .inputFluids('gtceu:glue 200')
        .itemOutputs('4x create:electron_tube')
        .duration(300)
        .EUt(16)
        event.recipes.gtceu.assembler('mechanical_crafter')             
        .itemInputs('2x create:electron_tube','create:cogwheel','create:brass_casing','rftoolsbase:crafting_card')
        .itemOutputs('create:mechanical_crafter')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.assembler('t1_frame')             
        .itemInputs('8x gtceu:double_t_rocket_steel_plate','4x gtceu:t_rocket_steel_frame')
        .inputFluids('gtceu:polyvinyl_chloride 864')
        .itemOutputs('kubejs:t1_engine_frame')
        .duration(400)
        .EUt(480)
        event.recipes.gtceu.assembler('t1_fan')             
        .itemInputs('2x gtceu:double_t_rocket_steel_plate','gtceu:t_rocket_steel_rotor')
        .inputFluids('gtceu:polyvinyl_chloride 144')
        .itemOutputs('kubejs:t1_fan')
        .duration(200)
        .EUt(480)
        event.recipes.gtceu.assembler('t1_fin')             
        .itemInputs('gtceu:double_t_rocket_steel_plate','5x gtceu:t_rocket_steel_plate')
        .inputFluids('gtceu:polyvinyl_chloride 144')
        .itemOutputs('kubejs:t1_fin')
        .duration(200)
        .EUt(480)
        event.recipes.gtceu.assembler('t1_tank')             
        .itemInputs('4x gtceu:double_t_rocket_steel_plate','2x gtceu:long_t_rocket_steel_rod')
        .inputFluids('gtceu:polyvinyl_chloride 144')
        .itemOutputs('kubejs:t1_tank')
        .duration(200)
        .EUt(480)
        event.recipes.gtceu.assembler('t1_nose')             
        .itemInputs('3x gtceu:double_t_rocket_steel_plate','minecraft:lightning_rod')
        .inputFluids('gtceu:polyvinyl_chloride 144')
        .itemOutputs('kubejs:t1_nose')
        .duration(200)
        .EUt(480)

        event.recipes.gtceu.assembler('item_pipez')             
        .itemInputs('4x gtceu:potin_large_fluid_pipe','gtceu:lv_conveyor_module','thermal:redstone_servo','gtceu:item_filter')
        .itemOutputs('4x pipez:item_pipe')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.assembler('fluid_pipez')             
        .itemInputs('4x gtceu:potin_large_fluid_pipe','gtceu:lv_electric_pump','thermal:redstone_servo','gtceu:fluid_filter')
        .itemOutputs('4x pipez:item_pipe')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.macerator('apoth_gemdust')             
        .itemInputs('apotheosis:gem')
        .itemOutputs('apotheosis:gem_dust')
        .duration(300)
        .EUt(16)

        event.recipes.gtceu.macerator('basalz_powder')             
        .itemInputs('thermal:basalz_rod')
        .itemOutputs('2x thermal:basalz_powder')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.macerator('petal_dust')             
        .itemInputs('2x #botania:petals')
        .itemOutputs('kubejs:petal_dust')
        .duration(200)
        .EUt(16)

        event.recipes.gtceu.macerator('obsidian_dust')             
        .itemInputs('minecraft:obsidian')
        .itemOutputs('gtceu:obsidian_dust')
        .duration(1000)
        .EUt(120)
        event.recipes.gtceu.macerator('blitz_powder')             
        .itemInputs('thermal:blitz_rod')
        .itemOutputs('2x thermal:blitz_powder')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.macerator('blizz_powder')             
        .itemInputs('thermal:blizz_rod')
        .itemOutputs('2x thermal:blizz_powder')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.mixer('raw_ironwood')             
        .itemInputs('minecraft:gold_nugget','3x gtceu:brass_nugget','5x minecraft:iron_nugget','twilightforest:liveroot')
        .itemOutputs('twilightforest:raw_ironwood')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.mixer('signalum_dust')             
        .itemInputs('3x gtceu:copper_dust','10x minecraft:redstone','gtceu:silver_dust')
        .itemOutputs('4x gtceu:signalum_dust')
        .duration(200)
        .EUt(30)
        event.recipes.gtceu.mixer('lumium_dust')             
        .itemInputs('3x gtceu:tin_dust','4x minecraft:glowstone_dust','gtceu:silver_dust')
        .itemOutputs('4x gtceu:lumium_dust')
        .duration(200)
        .EUt(120)
        event.recipes.gtceu.mixer('t_rocket_steel')             
        .itemInputs('3x gtceu:steel_dust','2x gtceu:stainless_steel_dust','gtceu:netherite_dust')
        .itemOutputs('6x gtceu:t_rocket_steel_dust')
        .duration(200)
        .EUt(120)

        event.recipes.gtceu.mixer('enderium_dust')             
        .itemInputs('3x gtceu:lead_dust','4x gtceu:ender_pearl_dust','gtceu:platinum_dust')
        .itemOutputs('4x gtceu:enderium_dust')
        .duration(200)
        .EUt(480)
        event.recipes.gtceu.electric_blast_furnace('t_rocket_steel_ingot')             
        .itemInputs('gtceu:t_rocket_steel_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('gtceu:t_rocket_steel_ingot')
        .duration(488)
        .EUt(400)
        .blastFurnaceTemp(1000)
        event.recipes.gtceu.electric_blast_furnace('lumium_ingot')             
        .itemInputs('gtceu:lumium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('gtceu:lumium_ingot')
        .duration(1000)
        .EUt(400)
        .blastFurnaceTemp(1000)
        event.recipes.gtceu.electric_blast_furnace('enderium_ingot')             
        .itemInputs('gtceu:enderium_dust','3x minecraft:fire_charge','2x gtceu:ender_pearl_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('gtceu:enderium_ingot')
        .duration(1400)
        .EUt(1200)
        .blastFurnaceTemp(2000)
        event.recipes.gtceu.assembler('brass_hand')             
        .itemInputs('3x eidolon:soul_shard','3x gtceu:brass_plate','gtceu:arcane_gold_plate')
        .itemOutputs('create:brass_hand')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.assembler('woolen_fabric')             
        .itemInputs('3x #minecraft:wool','4x minecraft:string')
        .itemOutputs('4x magistuarmory:woolen_fabric')
        .duration(200)
        .EUt(16)

        event.recipes.gtceu.assembler('deployer')             
        .itemInputs('create:andesite_casing','2x create:electron_tube','create:piston_extension_pole','create:brass_hand')
        .itemOutputs('create:deployer')
        .duration(200)
        .EUt(16)
        event.recipes.gtceu.electric_blast_furnace('aluminium_ingot')             
        .itemInputs('gtceu:aluminium_dust','2x gtceu:ice_shard_dust')
        .itemOutputs('gtceu:aluminium_ingot')
        .duration(1200)
        .EUt(120)
        .blastFurnaceTemp(1700)
        .circuit(1)
        event.recipes.gtceu.electric_blast_furnace('aluminium_ingot1')             
        .itemInputs('gtceu:aluminium_dust','2x gtceu:ice_shard_dust')
        .itemOutputs('gtceu:aluminium_ingot')
        .inputFluids('gtceu:nitrogen 1000')
        .duration(788)
        .EUt(120)
        .blastFurnaceTemp(1700)
        .circuit(2)
        event.recipes.gtceu.mixer('fluix_dust')             
        .itemInputs('2x kubejs:ccq_dust','2x gtceu:blue_alloy_dust','2x gtceu:red_alloy_dust','#gr:crystal_dust')
        .itemOutputs('3x ae2:fluix_dust')
        .duration(347)
        .EUt(480)
        event.recipes.gtceu.macerator('ccq_dust')             
        .itemInputs('ae2:charged_certus_quartz_crystal')
        .itemOutputs('kubejs:ccq_dust')
        .duration(400)
        .EUt(480)


})
const ingots = ['sulfur', 'copper', 'bronze', 'tin', 'steel', 'iron', 'gold', 'diamond', 'brass', 'zinc', 'golden', 'lead', 'silver', 'signalum', 'lumium', 'enderium', 'netherite', 'lapis', 'emerald', 'quartz', 'nickel', 'electrum', 'uranium', 'osmium', 'fluorite', 'invar', 'constantan'];
const mods = ['industrialforegoing', 'ad_astra', 'magistuarmory', 'create', 'eidolon', 'occultism', 'thermal', 'mekanism', 'bloodmagic', 'enderio', 'alexscaves'];
const components = ['ingot', 'nugget', 'gear', 'block', 'dust', 'plate', 'sheet'];

// Function to remove recipes
const removeRecipes = (event, format) => {
    for (const ingot of ingots) {
        for (const mod of mods) {
            for (const component of components) {
                event.remove({ output: format(mod, ingot, component) });
            }
        }
    }
};

// Function to remove tags
const removeTags = (event, format) => {
    for (const ingot of ingots) {
        for (const mod of mods) {
            for (const component of components) {
                event.removeAllTagsFrom(format(mod, ingot, component));
            }
        }
    }
};

// Define formats for different cases
const formats = {
    normal: (mod, ingot, component) => `${mod}:${ingot}_${component}`,
    reverse: (mod, ingot, component) => `${mod}:${component}_${ingot}`,
    simple: (mod, ingot) => `${mod}:${ingot}`,
    ore: (mod, ingot) => `${mod}:${ingot}_ore`,
    deepslateOre: (mod, ingot) => `${mod}:deepslate${ingot}_ore`
};

// Execute removals
ServerEvents.recipes(event => {
    removeRecipes(event, formats.normal);
    removeRecipes(event, formats.reverse);
    removeRecipes(event, formats.simple);
    removeRecipes(event, formats.ore);
});

ServerEvents.tags('item', event => {
    removeTags(event, formats.normal);
    removeTags(event, formats.reverse);
    removeTags(event, formats.simple);
    removeTags(event, formats.deepslateOre);
});
ServerEvents.tags('item', event => {
    event.add('create:create_ingots','gtceu:andesite_alloy_ingot')
    event.add('forge:ingots/andesite_alloy','create:andesite_alloy')
    event.add('forge:ingots/dark_metal','born_in_chaos_v1:dark_metal_ingot')
    event.removeAllTagsFrom('create:sturdy_sheet')
    event.remove('twilightforest:portal/activator','minecraft:diamond')
    event.add('twilightforest:portal/activator','evilcraft:dark_gem')
    event.add('gr:crystal_dust','gtceu:quartzite_dust')
    event.add('gr:crystal_dust','gtceu:nether_quartz_dust')
    event.add('gr:crystal_dust','gtceu:certus_quartz_dust')
    event.add('gr:crystal_dust','gtceu:ice_shard_dust')
    event.remove('minecraft:logs','ars_nouveau:green_archwood_wood')
    event.remove('minecraft:logs','ars_nouveau:red_archwood_wood')
    event.remove('minecraft:logs','ars_nouveau:purple_archwood_wood')
    event.remove('minecraft:logs','ars_nouveau:blue_archwood_wood')
    event.remove('minecraft:logs','ars_elemental:yellow_archwood_wood')
    event.removeAllTagsFrom("extradelight:flour")
    event.removeAllTagsFrom("create:dough")
    event.removeAllTagsFrom("culturaldelights:corn_dough")
    event.add('forge:ingots/azure_neodymium','alexscaves:azure_neodymium_ingot')
    event.add('forge:ingots/scarlet_neodymium','alexscaves:scarlet_neodymium_ingot')
    event.removeAllTagsFrom('alexscaves:block_of_scarlet_neodymium')
    event.removeAllTagsFrom('alexscaves:block_of_azure_neodymium')
    event.add('forge:storage_blocks/scarlet_neodymium','alexscaves:block_of_scarlet_neodymium')
    event.add('forge:storage_blocks/azure_neodymium','alexscaves:block_of_azure_neodymium')
    event.add('forge:raw_materials/azure_neodymium','alexscaves:raw_azure_neodymium')
    event.add('forge:raw_materials/scarlet_neodymium','alexscaves:raw_scarlet_neodymium')
    event.removeAllTagsFrom('enderio:flour')
    event.removeAllTagsFrom('create:flour')
    event.removeAllTagsFrom("pamhc2foodcore:flouritem")
    event.add('forge:flour','gtceu:wheat_dust')

})

ServerEvents.recipes(event => {
    event.recipes.botania.pure_daisy("elementalcraft:whiterock", "evilcraft:bloody_cobblestone")
    event.recipes.botania.petal_apothecary(
        'botania:hydroangeas',
    [
        '#elementalcraft:gems/fine_earth','#elementalcraft:gems/fine_water','#elementalcraft:gems/fine_water',
        'kubejs:blue_petal','kubejs:blue_petal','kubejs:cyan_petal','kubejs:cyan_petal'
    ])

    event.recipes.botania.petal_apothecary(
        'botania:endoflame',
    [
        '#elementalcraft:gems/fine_earth','#elementalcraft:gems/fine_fire','#elementalcraft:gems/fine_fire',
        'kubejs:brown_petal','kubejs:brown_petal','kubejs:red_petal','kubejs:gray_petal'
    ])
    event.recipes.botania.runic_altar('botania:rune_water',
    ['elementalcraft:major_rune_slate','botania:mana_powder','#forge:ingots/manasteel',
    '#elementalcraft:gems/fine_water','minecraft:water_bucket','minecraft:kelp','#forge:raw_fishes'],5200)
    event.recipes.botania.runic_altar('botania:rune_fire',
    ['elementalcraft:major_rune_slate','botania:mana_powder','#forge:ingots/manasteel',
    '#elementalcraft:gems/fine_fire','minecraft:nether_brick','minecraft:blaze_rod','born_in_chaos_v1:fire_dust'],5200)
    event.recipes.botania.runic_altar('botania:rune_earth',
    ['elementalcraft:major_rune_slate','botania:mana_powder','#forge:ingots/manasteel',
    '#elementalcraft:gems/fine_earth','minecraft:grass_block','minecraft:stone','#minecraft:saplings'],5200)
    event.recipes.botania.runic_altar('botania:rune_air',
    ['elementalcraft:major_rune_slate','botania:mana_powder','#forge:ingots/manasteel',
    '#elementalcraft:gems/fine_air','quark:bottled_cloud','minecraft:feather','#minecraft:wool'],5200)

event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:stainless_steel_ingot', 5000)
event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:steel_ingot', 10000)
event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'elementalcraft:drenched_iron_ingot', 7500)

})
ServerEvents.recipes(event => {
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:gold_ingot"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "minecraft:gold_ingot"
          }
        ],
        "output": {
          "item": "eidolon:arcane_gold_ingot",
          "count": 2
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
    )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "gtceu:cobalt_brass_ingot"
          },
          {
            "item": "gtceu:cobalt_brass_ingot"
          },
          {
            "item": "kubejs:tool_aspect"
          },
          {
            "item": "kubejs:tool_aspect"
          },
          {
            "item": "kubejs:tool_aspect"
          },
          {
            "item": "kubejs:tool_aspect"
          },
          {
            "item": "kubejs:tool_aspect"
          },
          {
            "item": "kubejs:tool_aspect"
          }
        ],
        "output": {
          "item": "gtceu:alchemical_brass_ingot",
          "count": 2
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
    )

    event.custom({
      "type": "hexerei:mixingcauldron",
      "liquid": {
        "fluid": "minecraft:water"
      },
      "ingredients": [
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        },
        {
          "tag": "minecraft:pickaxes"
        }
      ],
      "output": {
        "item": "kubejs:tool_aspect",
        "count": 27
      },
      "liquidOutput": {
        "fluid": "minecraft:water"
      },
      "fluidLevelsConsumed": 1000,
      "heatRequirement": "heated"
    }
  )
  event.custom({
    "type": "hexerei:mixingcauldron",
    "liquid": {
      "fluid": "minecraft:water"
    },
    "ingredients": [
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      },
      {
        "tag": "minecraft:axes"
      }
    ],
    "output": {
      "item": "kubejs:tool_aspect",
      "count": 27
    },
    "liquidOutput": {
      "fluid": "minecraft:water"
    },
    "fluidLevelsConsumed": 1000,
    "heatRequirement": "heated"
  }
)
event.custom({
  "type": "hexerei:mixingcauldron",
  "liquid": {
    "fluid": "minecraft:water"
  },
  "ingredients": [
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    },
    {
      "tag": "minecraft:shovels"
    }
  ],
  "output": {
    "item": "kubejs:tool_aspect",
    "count": 9
  },
  "liquidOutput": {
    "fluid": "minecraft:water"
  },
  "fluidLevelsConsumed": 1000,
  "heatRequirement": "heated"
}
)
event.custom({
  "type": "hexerei:mixingcauldron",
  "liquid": {
    "fluid": "minecraft:water"
  },
  "ingredients": [
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    },
    {
      "tag": "minecraft:hoes"
    }
  ],
  "output": {
    "item": "kubejs:tool_aspect",
    "count": 18
  },
  "liquidOutput": {
    "fluid": "minecraft:water"
  },
  "fluidLevelsConsumed": 1000,
  "heatRequirement": "heated"
}
)

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:gold_ingot"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "eidolon:enchanted_ash"
          }
        ],
        "output": {
          "item": "eidolon:arcane_gold_ingot"
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
        )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "minecraft:crimson_fungus"
          },
          {
            "item": "minecraft:crimson_roots"
          },
          {
            "item": "minecraft:weeping_vines"
          },
          {
            "item": "minecraft:nether_wart"
          },
          {
            "item": "minecraft:nether_wart"
          },
          {
            "item": "minecraft:nether_wart"
          },
          {
            "item": "gtceu:sulfur_dust"
          },
          {
            "item": "gtceu:sulfur_dust"
          }
        ],
        "output": {
          "item": "eidolon:crimson_essence",
          "count": 4
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
    )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "gtceu:dark_metal_dust"
          },
          {
            "item": "gtceu:dark_metal_dust"
          },
          {
            "item": "eidolon:shadow_gem"
          },
          {
            "item": "eidolon:shadow_gem"
          }
        ],
        "output": {
          "item": "evilcraft:dark_gem",
          "count": 2
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
        )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "eidolon:zombie_heart"
          },
          {
            "item": "minecraft:rotten_flesh"
          },
          {
            "item": "minecraft:rotten_flesh"
          },
          {
            "item": "minecraft:bone_meal"
          },
          {
            "item": "minecraft:bone_meal"
          },
          {
            "item": "minecraft:bone_meal"
          },
          {
            "item": "minecraft:charcoal"
          },
          {
            "item": "minecraft:charcoal"
          }
        ],
        "output": {
          "item": "eidolon:death_essence",
          "count": 6
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
    )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "minecraft:redstone"
          },
          {
            "item": "minecraft:lapis_lazuli"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "minecraft:quartz"
          }
        ],
        "output": {
          "item": "eidolon:lesser_soul_gem",
          "count": 2
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
        )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "tag": "botania:petals"
          },
          {
            "tag": "botania:petals"
          },
          {
            "tag": "botania:petals"
          },
          {
            "tag": "botania:petals"
          },
          {
            "tag": "botania:petals"
          },
          {
            "tag": "botania:petals"
          },
          {
            "item": "minecraft:bone"
          },
          {
            "item": "minecraft:bone"
          }
        ],
        "output": {
          "item": "kubejs:mystical_bone",
          "count": 2
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
    )
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": "minecraft:ghast_tear"
          },
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "eidolon:death_essence"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "eidolon:soul_shard"
          },
          {
            "item": "minecraft:diamond"
          },
          {
            "item": "minecraft:diamond"
          }
        ],
        "output": {
          "item": "eidolon:shadow_gem",
          "count": 2
        },
        "liquidOutput": {
          "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
      }
        )
        event.custom({
          "type": "hexerei:mixingcauldron",
          "liquid": {
            "fluid": "minecraft:water"
          },
          "ingredients": [
            {
              "item": "gtceu:tin_ingot"
            },
            {
              "item": "gtceu:tin_ingot"
            },
            {
              "item": "gtceu:tin_ingot"
            },
            {
              "item": "minecraft:iron_ingot"
            },
            {
              "item": "minecraft:iron_ingot"
            },
            {
              "item": "minecraft:iron_ingot"
            },
            {
              "item": "minecraft:bone_meal"
            },
            {
              "item": "minecraft:bone_meal"
            }
          ],
          "output": {
            "item": "eidolon:pewter_blend",
            "count": 5
          },
          "liquidOutput": {
            "fluid": "minecraft:water"
          },
          "fluidLevelsConsumed": 1000,
          "heatRequirement": "heated"
        }
          )
  
        event.custom({
          "type": "hexerei:mixingcauldron",
          "liquid": {
            "fluid": "gtceu:arcane_gold"
          },
          "ingredients": [
            {
              "item": "storagedrawers:iron_storage_upgrade"
            },
            {
              "item": "storagedrawers:iron_storage_upgrade"
            },
            {
              "item": "gtceu:double_ironwood_plate"
            },
            {
              "item": "gtceu:double_ironwood_plate"
            },
            {
              "item": "gtceu:signalum_dust"
            },
            {
              "item": "gtceu:signalum_dust"
            },
            {
              "item": "gtceu:dark_metal_dust"
            },
            {
              "item": "gtceu:dark_metal_dust"
            }
          ],
          "output": {
            "item": "storagedrawers:gold_storage_upgrade",
            "count": 2
          },
          "liquidOutput": {
            "fluid": "gtceu:arcane_gold"
          },
          "fluidLevelsConsumed": 576,
          "heatRequirement": "heated"
        }
          )
          event.custom(
            {
              "type": "hexerei:drying_rack",
              "ingredients": [
                {
                  "item": "kubejs:prepared_leather"
                }
              ],
              "output": {
                "item": "kubejs:finished_leather"
              },
              "dryingTimeInTicks": 2000
            }
          )
})
ServerEvents.recipes(event => {
    event.custom(
      {
        "type": "ad_astra:oxygen_loading",
        "cookingtime": 1,
        "energy": 30,
        "input": {
          "fluid": "gtceu:oxygen",
          "millibuckets": 25
        },
        "result": {
          "fluid": "ad_astra:oxygen",
          "millibuckets": 25
        }
      }
      )
      event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
{"item": "kubejs:t2_core"},
{"item": "gtceu:tt_rocket_steel_block"},
{"item": "gtceu:tt_rocket_steel_block"},
{"item": "gtceu:tt_rocket_steel_block"},
{"item": "gtceu:tt_rocket_steel_block"},
{"item": "gtceu:tt_rocket_steel_block"},
{"item": "gtceu:tt_rocket_steel_block"},
{"item": "kubejs:t2_fin"},
{"item": "kubejs:t2_tank"},
{"item": "kubejs:t2_tank"},
{"item": "kubejs:t2_fin"},
{"item": "kubejs:t2_fin"},
{"item": "kubejs:t2_engine"},
{"item": "kubejs:t2_fin"}
            ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_2_rocket"
          }}
      )
      event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
{"item": "kubejs:t3_core"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "kubejs:t3_fin"},
{"item": "kubejs:t3_tank"},
{"item": "kubejs:t3_tank"},
{"item": "kubejs:t3_fin"},
{"item": "kubejs:t3_fin"},
{"item": "kubejs:t3_engine"},
{"item": "kubejs:t3_fin"}
            ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_3_rocket"
          }}
      )
      event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
{"item": "kubejs:t3_core"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "gtceu:ttt_rocket_steel_block"},
{"item": "kubejs:t3_fin"},
{"item": "kubejs:t3_tank"},
{"item": "kubejs:t3_tank"},
{"item": "kubejs:t3_fin"},
{"item": "kubejs:t3_fin"},
{"item": "kubejs:t3_engine"},
{"item": "kubejs:t3_fin"}
            ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_3_rocket"
          }}
      )
      event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
{"item": "kubejs:t1_core"},
{"item": "gtceu:t_rocket_steel_block"},
{"item": "gtceu:t_rocket_steel_block"},
{"item": "gtceu:t_rocket_steel_block"},
{"item": "gtceu:t_rocket_steel_block"},
{"item": "gtceu:t_rocket_steel_block"},
{"item": "gtceu:t_rocket_steel_block"},
{"item": "kubejs:t1_fin"},
{"item": "kubejs:t1_tank"},
{"item": "kubejs:t1_tank"},
{"item": "kubejs:t1_fin"},
{"item": "kubejs:t1_fin"},
{"item": "kubejs:t1_engine"},
{"item": "kubejs:t1_fin"}
            ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_1_rocket"
          }}
      )
      event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
{"item": "kubejs:t4_core"},
{"item": "gtceu:tttt_rocket_steel_block"},
{"item": "gtceu:tttt_rocket_steel_block"},
{"item": "gtceu:tttt_rocket_steel_block"},
{"item": "gtceu:tttt_rocket_steel_block"},
{"item": "gtceu:tttt_rocket_steel_block"},
{"item": "gtceu:tttt_rocket_steel_block"},
{"item": "kubejs:t4_fin"},
{"item": "kubejs:t4_tank"},
{"item": "kubejs:t4_tank"},
{"item": "kubejs:t4_fin"},
{"item": "kubejs:t4_fin"},
{"item": "kubejs:t4_engine"},
{"item": "kubejs:t4_fin"}
            ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_4_rocket"
          }}
      )

})
ServerEvents.recipes(event => {
  event.custom(
    {
    "type": "elementalcraft:binding",
    "element_amount": 5000,
    "element_type": "water",
    "ingredients": [
      {
        "item": "thermal:fluid_cell"
      },
      {
        "item": "thermal:signalum_glass"
      },
      {
        "item": "thermal:signalum_glass"
      },
      {
        "item": "gtceu:mv_electric_pump"
      },
      {
        "item": "gtceu:mv_electric_pump"
      }
    ],
    "output": {
      "item": "thermal:device_water_gen"
    }
  })
  event.custom(
    {
    "type": "elementalcraft:binding",
    "element_amount": 10000,
    "element_type": "earth",
    "ingredients": [
      {
        "item": "botania:diluted_pool"
      },
      {
        "item": "botania:mana_powder"
      },
      {
        "item": "botania:mana_powder"
      },
      {
        "item": "botania:mana_powder"
      },
      {
        "item": "botania:mana_powder"
      },
      {
        "item": "botania:rune_earth"
      },
      {
        "item": "botania:rune_earth"
      }
    ],
    "output": {
      "item": "botania:mana_pool"
    }
  })

  event.custom(
        {
        "type": "elementalcraft:binding",
        "element_amount": 1250,
        "element_type": "air",
        "ingredients": [
          {
            "item": "gtceu:lumium_ingot"
          },
          {
            "item": "gtceu:polyethylene_dust"
          },
          {
            "item": "gtceu:polyethylene_dust"
          },
          {
            "item": "elementalcraft:aircrystal"
          }
        ],
        "output": {
          "item": "gtceu:ethylumium_ingot"
        }
      })
      event.custom(
        {
        "type": "elementalcraft:binding",
        "element_amount": 15000,
        "element_type": "air",
        "ingredients": [
          {
            "item": "kubejs:t1_nose"
          },
          {
            "tag": "gtceu:circuits/iv"
          },
          {
            "tag": "gtceu:circuits/iv"
          },
          {
            "item": "eidolon:lesser_soul_gem"
          },
          {
            "item": "eidolon:lesser_soul_gem"
          },
          {
            "item": "hexerei:moon_dust"
          },
          {
            "item": "hexerei:moon_dust"
          },
          {
            "item": "hexerei:moon_dust"
          },
          {
            "item": "hexerei:moon_dust"
          }

        ],
        "output": {
          "item": "kubejs:t1_core"
        }
      })
      event.custom(
        {
            "type": "elementalcraft:infusion",
            "element_amount": 500,
            "element_type": "earth",
            "input": {
              "tag": "twilightforest:logs"
            },
            "output": {
              "item": "botania:livingwood_log"
            }
          }
      )
      event.custom(
        {
            "type": "elementalcraft:infusion",
            "element_amount": 500,
            "element_type": "earth",
            "input": {
              "item": "minecraft:basalt"
            },
            "output": {
              "item": "botania:livingrock"
            }
          }
      )
      event.custom(
        {
            "type": "elementalcraft:infusion",
            "element_amount": 500,
            "element_type": "earth",
            "input": {
              "tag": "twilightforest:logs"
            },
            "output": {
              "item": "botania:livingwood_log"
            }
          }
      )
      event.custom(
        {
            "type": "elementalcraft:infusion",
            "element_amount": 500,
            "element_type": "water",
            "input": {
              "tag": "forge:ingots/ironwood"
            },
            "output": {
              "item": "elementalcraft:drenched_iron_ingot"
            }
          }
      )
      event.custom(
        {
            "type": "elementalcraft:infusion",
            "element_amount": 500,
            "element_type": "earth",
            "input": {
              "item": "minecraft:stick"
            },
            "output": {
              "item": "twilightforest:liveroot"
            }
          }
      )
      event.custom(
        {
          "type": "elementalcraft:binding",
          "element_amount": 1250,
          "element_type": "air",
          "ingredients": [
            {
              "tag": "forge:ingots/rose_gold"
            },
            {
              "item": "elementalcraft:drenched_iron_ingot"
            },
            {
              "tag": "forge:ingots/brass"
            },
            {
              "tag": "forge:dusts/polyvinyl_chloride"
            },
            {
              "tag": "forge:dusts/polyvinyl_chloride"
            },
            {
              "item": "elementalcraft:aircrystal"
            },
            {
              "item": "elementalcraft:aircrystal"
            }
          ],
          "output": {
            "item": "elementalcraft:swift_alloy_ingot",
            "count": 2
          }
        }
      )
    event.custom(
      {
        "type": "elementalcraft:pureinfusion",
        "element_amount": 60000,
        "ingredients": [
          {
            "item": "elementalcraft:inert_crystal"
          },
          {
            "item": "elementalcraft:watercrystal"
          },
          {
            "item": "elementalcraft:firecrystal"
          },
          {
            "item": "elementalcraft:earthcrystal"
          },
          {
            "item": "elementalcraft:aircrystal"
          }
        ],
        "output": {
          "item": "elementalcraft:purecrystal"
        }
      }
    )
})

ServerEvents.recipes(event => {
  event.shapeless('evilcraft:bowl_of_promises_dusted', ['evilcraft:bowl_of_promises_empty','8x evilcraft:dark_gem_crushed'])
  event.shapeless('5x minecraft:bone_meal', ['born_in_chaos_v1:shattered_skull','#forge:tools/mortars'])
  event.shapeless('2x minecraft:bone_meal', ['aquaculture:fish_bones','#forge:tools/mortars'])
  event.shapeless('2x minecraft:bone_meal', ['ars_nouveau:wilden_horn','#forge:tools/mortars'])
  event.shapeless('1x minecraft:bone_meal', ['majruszsdifficulty','#forge:tools/mortars'])
  event.shapeless('4x minecraft:bone_meal', ['cataclysm_delight:molten_bone','#forge:tools/mortars'])
  event.shapeless('1x minecraft:bone_meal', ['alexsmobs:fish_bones','#forge:tools/mortars'])
  event.shapeless('3x minecraft:bone_meal', ['upgrade_aquatic:thrasher_tooth','#forge:tools/mortars'])
  event.shapeless('3x minecraft:bone_meal', ['minecraft:bone','#forge:tools/mortars'])
  event.shapeless('kubejs:petal_dust', ['4x #botania:petals','#forge:tools/mortars'])
  event.shapeless('2x kubejs:soaked_leather', ['2x minecraft:leather','gtceu:lime_water_bucket'])
  event.shapeless('3x farmersdelight:wheat_dough', ['3x gtceu:wheat_dust','#forge:eggs','minecraft:water_bucket'])
  event.shapeless('3x farmersdelight:wheat_dough', ['3x gtceu:wheat_dust','#forge:eggs',Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT()])
  event.shapeless('2x minecraft:warped_planks', ['minecraft:warped_stem'])
  event.shapeless('2x minecraft:crimson_planks', ['minecraft:crimson_stem'])
  event.shapeless('2x minecraft:mangrove_planks', ['minecraft:mangrove_log'])
  event.shapeless('2x minecraft:dark_oak_planks', ['minecraft:dark_oak_log'])
  event.shapeless('2x minecraft:acacia_planks', ['minecraft:acacia_log'])
  event.shapeless('2x minecraft:jungle_planks', ['minecraft:jungle_log'])
  event.shapeless('2x minecraft:birch_planks', ['minecraft:birch_log'])
  event.shapeless('2x minecraft:spruce_planks', ['minecraft:spruce_log'])
  event.shapeless('2x minecraft:oak_planks', ['minecraft:oak'])
  event.shapeless('2x gtceu:rubber_planks', ['gtceu:rubber_log'])
  event.shapeless('2x kubejs:soaked_leather', ['2x minecraft:leather',Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:lime_water"}}').weakNBT()])
  event.shapeless('kubejs:scraped_leather', ['kubejs:soaked_leather','#forge:tools/knives'])
  event.shapeless('2x kubejs:prepared_leather', ['2x kubejs:scraped_leather','gtceu:tannic_acid_bucket'])
  event.shapeless('2x kubejs:prepared_leather', ['2x kubejs:scraped_leather',Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:tannic_acid"}}').weakNBT()])
  event.shapeless('eidolon:zombie_heart', ['reliquary:zombie_heart'])
  event.shapeless('reliquary:zombie_heart', ['eidolon:zombie_heart'])
  event.shapeless('gtceu:crushed_redstone_ore', ['gtceu:raw_redstone','#forge:tools/hammers'])
  event.shapeless('storagedrawers:oak_full_drawers_2', ['storagedrawers:oak_full_drawers_1','2x gtceu:treated_wood_rod'])
  event.shapeless('storagedrawers:oak_full_drawers_4', ['storagedrawers:oak_full_drawers_2','2x gtceu:treated_wood_rod'])
  event.shapeless('2x storagedrawers:oak_half_drawers_1', ['storagedrawers:oak_full_drawers_1','2x gtceu:treated_wood_planks','#forge:tools/saws'])
  event.shapeless('storagedrawers:oak_half_drawers_2', ['storagedrawers:oak_half_drawers_1','2x gtceu:treated_wood_rod'])
  event.shapeless('storagedrawers:oak_half_drawers_4', ['storagedrawers:oak_half_drawers_2','2x gtceu:treated_wood_rod'])
  event.shapeless('storagenetwork:import_filter_kabel', ['storagenetwork:import_kabel','gtceu:item_filter'])
  event.shapeless('storagenetwork:filter_kabel', ['storagenetwork:storage_kabel','gtceu:item_filter'])
  event.shapeless('6x quark:iron_button', ['minecraft:heavy_weighted_pressure_plate','#forge:tools/saws'])
  event.shapeless('6x quark:gold_button', ['minecraft:light_weighted_pressure_plate','#forge:tools/saws'])
  event.shapeless('gtceu:lime_water_bucket', ['minecraft:water_bucket','2x gtceu:quicklime_dust']).replaceIngredient('minecraft:water_bucket', '')
  event.shapeless(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:lime_water"}}'), [Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),'2x gtceu:quicklime_dust']).replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), '')
  event.shapeless('gtceu:tannic_acid_bucket', ['minecraft:water_bucket','4x gtceu:wood_dust']).replaceIngredient('minecraft:water_bucket', '')
  event.shapeless(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:tannic_acid"}}'), [Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),'4x gtceu:wood_dust']).replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), '')

  event.shapeless('storagedrawers:void_upgrade', ['storagedrawers:upgrade_template','gtceu:lv_conveyor_module','trashcans:item_trash_can'])
  event.shapeless('storagedrawers:illumination_upgrade', ['storagedrawers:upgrade_template','3x minecraft:glowstone_dust'])
  event.shapeless('storagedrawers:one_stack_upgrade', ['storagedrawers:upgrade_template','2x gtceu:obsidian_plate'])
  event.shapeless('storagedrawers:redstone_upgrade', ['storagedrawers:upgrade_template','minecraft:comparator'])
  event.shapeless('storagedrawers:max_redstone_upgrade', ['storagedrawers:redstone_upgrade','2x minecraft:redstone'])
  event.shapeless('storagedrawers:min_redstone_upgrade', ['storagedrawers:max_redstone_upgrade'])
  event.shapeless('storagedrawers:fill_level_upgrade', ['storagedrawers:redstone_upgrade','#gtceu:circuits/ulv'])
  event.shapeless('2x rftoolsbase:crafting_card', ['minecraft:crafting_table','2x minecraft:paper','2x minecraft:redstone','2x minecraft:lapis_lazuli'])
  event.shapeless('eidolon:pewter_blend', ['minecraft:bone_meal','#forge:ingots/tin','minecraft:iron_ingot','#forge:tools/hammers'])
  event.shapeless('magistuarmory:steel_ring', ['gtceu:steel_ring','#forge:tools/hammers'])
  event.shapeless('gtceu:wood_dust', ['#minecraft:planks','#forge:tools/mortars'])
  event.shapeless('2x gtceu:small_flint_dust', ['minecraft:flint','#forge:tools/mortars'])
  event.shapeless('create:track_signal', ['create:electron_tube','create:railway_casing','create:redstone_link'])
  event.shapeless('create:track_observer', ['create:electron_tube','create:railway_casing','minecraft:observer'])
  event.shapeless('create:placard', ['minecraft:item_frame','gtceu:brass_plate','gtceu:iron_plate'])
  event.shapeless('create:analog_lever', ['create:andesite_casing','minecraft:lever'])
  event.shapeless('create:andesite_funnel', ['create:andesite_casing','minecraft:hopper','gtceu:lv_conveyor_module'])
  event.shapeless('create:brass_funnel', ['create:brass_casing','create:electron_tube','gtceu:mv_conveyor_module'])
  event.shapeless('create:andesite_tunnel', ['2x create:andesite_funnel'])
  event.shapeless('create:brass_tunnel',   ['2x create:brass_funnel'])
  event.shapeless('pipez:energy_pipe',   ['gtceu:copper_quadruple_cable'])
  event.shapeless('create:nixie_tube',   ['2x create:electron_tube','gtceu:fine_red_alloy_wire','minecraft:glowstone_dust'])
  event.shapeless('create:track_station', ['create:electron_tube','create:mechanical_bearing','minecraft:compass'])
  event.shapeless('2x gtceu:small_quartz_sand_dust', ['#minecraft:sand','#forge:tools/mortars'])
  event.shapeless('gtceu:stone_dust', ['minecraft:stone','#forge:tools/mortars'])
  event.shapeless('2x gtceu:fireclay_dust', ['gtceu:clay_dust','gtceu:brick_dust','gtceu:small_flint_dust'])
  event.shapeless('create:fluid_pipe', ['gtceu:copper_normal_fluid_pipe'])
  event.shapeless('gtceu:copper_normal_fluid_pipe', ['create:fluid_pipe'])
  event.shapeless('create:crafter_slot_cover', ['gtceu:brass_plate'])
  event.shapeless('thermal:drill_head', ['gtceu:steel_drill_head'])
  event.shapeless('2x minecraft:string', ['3x cottonly:ball'])
  event.shapeless('elementalcraft:elementpipe_impaired', ['2x gtceu:lead_plate','elementalcraft:contained_crystal'])
  event.shapeless('4x minecraft:torch', ['gtceu:coke_dust','minecraft:stick'])
  event.shapeless('2x minecraft:torch', ['#minecraft:coals','minecraft:stick'])
  event.shapeless('minecraft:torch', ['#forge:cookingoil','minecraft:stick'])
  event.shapeless('4x minecraft:torch', ['gtceu:coke_gem','minecraft:stick'])
  event.shapeless('3x minecraft:torch', ['gtceu:phosphorus_dust','minecraft:stick'])
  event.shapeless('8x minecraft:torch', ['minecraft:wool','gtceu:cerosote_bucket','minecraft:stick'])
  event.shapeless('minecraft:torch', ['gtceu:sulfur_dust','minecraft:stick'])
  event.shapeless('4x minecraft:torch', ['delightful:animal_oil_bottle','minecraft:stick'])
  event.shapeless('3x minecraft:torch', ['born_in_chaos_v1:fire_dust','minecraft:stick'])
  event.shapeless('2x minecraft:torch', ['gtceu:coal_dust','minecraft:stick'])
  event.shapeless('2x minecraft:torch', ['gtceu:charcoal_dust','minecraft:stick'])
  event.shapeless('minecraft:torch', ['gtceu:sticky_resin','minecraft:stick'])
  event.shapeless('2x minecraft:torch', ['twilightforest:torchberries','minecraft:stick'])
  event.shapeless('2x minecraft:torch', ['evilcraft:blood_waxed_coal','minecraft:stick'])
  event.shapeless('minecraft:end_rod', ['minecraft:blaze_rod','minecraft:popped_chorus_fruit'])

  event.shapeless('create:fluid_tank', ['gtceu:bronze_drum'])
  event.shapeless('create:filter', ['gtceu:item_filter','gtceu:andesite_alloy_plate'])
  event.shapeless('create:attribute_filter', ['gtceu:item_tag_filter','gtceu:brass_plate'])
  event.shapeless('2x ae2:fluix_smart_cable', ['2x ae2:fluix_covered_cable','gtceu:red_alloy_dust','gtceu:blue_alloy_dust'])
  let zbingot =['copper','tin','iron','bronze','gold','zinc','brass','nickel','lead','andesite_alloy']
  event.shaped(
    Item.of("born_in_chaos_v1:pileof_dark_metal", 1),[ 
      'AAC',
      'ADB',
      'CBB'
    ],{
      A: 'botania:black_petal',
      B: 'minecraft:black_candle',
      C: 'eidolon:enchanted_ash',
      D: '#forge:raw_materials'
    })
  event.shaped(
    Item.of("minecraft:lantern", 1),[ 
      'ABC',
      'DED',
      'DDD'
    ],{
      A: '#forge:tools/saws',
      B: 'minecraft:chain',
      C: '#forge:tools/hammers',
      D: 'gtceu:iron_rod',
      E: 'minecraft:torch'
    })
    event.shaped(
      Item.of("minecraft:soul_lantern", 1),[ 
        'ABC',
        'DED',
        'DDD'
      ],{
        A: '#forge:tools/saws',
        B: 'minecraft:chain',
        C: '#forge:tools/hammers',
        D: 'gtceu:iron_rod',
        E: 'minecraft:soul_torch'
      })
    event.shaped(
      Item.of("minecraft:chain", 2),[ 
        ' A ',
        'BAC',
        ' A '
      ],{
        A: 'gtceu:iron_ring',
        B: '#forge:tools/saws',
        C: '#forge:tools/hammers'
      })

  event.shaped(
    Item.of("buildinggadgets2:gadget_building", 1),[ 
      'ABA',
      'CDC',
      'EFE'
    ],{
      A: 'gtceu:hv_emitter',
      B: 'gtceu:hv_sensor',
      C: '#gtceu:circuits/hv',
      D: 'gtceu:computer_monitor_cover',
      E: 'gtceu:diamond_plate',
      F: '#gtceu:batteries/hv'
    })
  event.shaped(
    Item.of("buildinggadgets2:gadget_exchanging", 1),[ 
      'ABA',
      'CDC',
      'EFE'
    ],{
      A: 'gtceu:hv_electric_motor',
      B: 'gtceu:hv_emitter',
      C: 'gtceu:diamond_plate',
      D: 'buildinggadgets2:gadget_building',
      E: 'gtceu:lapis_plate',
      F: '#gtceu:circuits/hv'
    })
    event.shaped(
      Item.of("buildinggadgets2:gadget_copy_paste", 1),[ 
        'ABC',
        'DED',
        'FGF'
      ],{
        A: 'gtceu:hv_emitter',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:hv_sensor',
        D: 'gtceu:emerald_plate',
        E: 'buildinggadgets2:gadget_building',
        F: 'gtceu:glass_plate',
        G: 'gtceu:gold_plate'
      })
  
    event.shaped(
      Item.of("buildinggadgets2:gadget_destruction", 1),[ 
        'ABA',
        'CDC',
        'EBE'
      ],{
        A: 'gtceu:hv_emitter',
        B: 'minecraft:netherite_pickaxe',
        C: 'gtceu:black_steel_plate',
        D: 'buildinggadgets2:gadget_building',
        E: 'reliquary:nebulous_heart'
      })
          event.shaped(
            Item.of("buildinggadgets2:template_manager", 1),[ 
              'ABA',
              'CDC',
              'EFE'
            ],{
              A: 'gtceu:red_alloy_plate',
              B: 'gtceu:emerald_plate',
              D: 'gtceu:hv_machine_hull',
              C: '#gtceu:circuits/hv',
              E: 'gtceu:blue_alloy_plate',
              F: 'gtceu:lapis_plate'
            })
  
  event.shaped(
    Item.of("torchmaster:dreadlamp", 1),[ 
      'AAA',
      'BCB',
      'ADA'
    ],{
      A: 'gtceu:obsidian_plate',
      B: '#forge:glass_panes',
      C: 'naturesaura:aura_bottle',
      D: 'minecraft:black_candle'
    })
    event.shaped(
      Item.of("torchmaster:frozen_pearl", 1),[ 
        'AAA',
        'ABA',
        'AAA'
      ],{
        A: '#minecraft:ice',
        B: 'minecraft:ender_pearl'
      })
  
  event.shaped(
    Item.of("thermal:satchel", 1),[ 
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: 'kubejs:finished_leather',
      B: 'magistuarmory:woolen_fabric',
      C: 'gtceu:iron_ring'
    })
  event.shaped(
    Item.of('thermal:potion_amplifier_augment', 1),[ 
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: '#gtceu:circuits/mv',
      B: 'gtceu:double_lumium_plate',
      C: 'botania:blaze_block'
    })
    event.shaped(
      Item.of('thermal:potion_duration_augment', 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: '#gtceu:circuits/mv',
        B: 'gtceu:double_red_alloy_plate',
        C: 'botania:blaze_block'
      })
  
  event.shaped(
    Item.of("thermal:xp_storage_augment", 1),[ 
      'ABA',
      'BCB',
      'ABA'
    ],{
      A: 'gtceu:silver_plate',
      B: 'gtceu:rose_gold_plate',
      C: 'thermal:xp_crystal'
    })
  event.shaped(
    Item.of("thermal:rf_coil_storage_augment", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:silver_plate',
      B: 'gtceu:rose_gold_plate',
      C: 'thermal:rf_coil',
      D: '#gtceu:circuits/mv'
    })
    event.shaped(
      Item.of("thermal:rf_coil_augment", 1),[ 
        'BAB',
        'CDC',
        'BAB'
      ],{
        A: 'gtceu:silver_plate',
        B: 'gtceu:rose_gold_plate',
        C: 'thermal:rf_coil',
        D: '#gtceu:circuits/mv'
      })
    event.shaped(
      Item.of("thermal:rf_coil_xfer_augment", 1),[ 
        'ABA',
        'CDC',
        'BAB'
      ],{
        A: 'gtceu:silver_plate',
        B: 'gtceu:rose_gold_plate',
        C: 'thermal:rf_coil',
        D: '#gtceu:circuits/mv'
      })
      event.shaped(
        Item.of("thermal:fluid_tank_augment", 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:stainless_steel_plate',
          B: 'thermal:lumium_glass',
          C: 'gtceu:rubber_plate',
          D: 'thermal:fluid_cell_frame'
        })
      event.shaped(
        Item.of("thermal:area_radius_augment", 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:ender_pearl_plate',
          B: 'thermal:lumium_glass',
          C: 'thermal:redstone_servo',
          D: 'gtceu:signalum_gear'
        })

  event.shaped(
    Item.of("ae2:memory_card", 1),[ 
      'ABB',
      'CDC'
    ],{
      A: 'ae2:calculation_processor',
      B: 'gtceu:stainless_steel_plate',
      C: 'gtceu:rose_gold_plate',
      D: 'gtceu:red_alloy_dust'
    })
    event.shaped(
      Item.of("kubejs:steam_chip", 1),[ 
        'AAA',
        'BCB',
        'AAA'
      ],{
        A: 'gtceu:bronze_tiny_fluid_pipe',
        B: 'gtceu:wood_screw',
        C: 'gtceu:stone_plate'
      })
    event.shaped(
      Item.of("ad_astra:space_helmet", 1),[ 
        'AAA',
        'BCB'
      ],{
        A: 'gtceu:ethylumium_plate',
        B: 'gtceu:fine_borosilicate_glass_wire',
        C: 'gtceu:hazmat_headpiece'
      })
    event.shaped(
      Item.of("ad_astra:space_suit", 1),[ 
        'ABA',
        'CDC',
        'AEA'
      ],{
        A: 'gtceu:ethylumium_plate',
        B: 'ad_astra:oxygen_gear',
        C: 'ad_astra:gas_tank',
        D: 'gtceu:hazmat_chestpiece',
        E: 'gtceu:duct_tape'
      })
    event.shaped(
      Item.of("ad_astra:space_pants", 1),[ 
        'ABA',
        'CDC',
        'C C'
      ],{
        A: 'gtceu:fine_borosilicate_glass_wire',
        B: 'gtceu:duct_tape',
        C: 'gtceu:ethylumium_plate',
        D: 'gtceu:hazmat_leggings'
      })
      event.shaped(
        Item.of("ad_astra:space_boots", 1),[ 
          'ABA',
          'A A'
        ],{
          A: 'gtceu:ethylumium_plate',
          B: 'gtceu:hazmat_boots'
        })
      event.shaped(
        Item.of("ad_astra:gas_tank", 1),[ 
          'DAD',
          'BCB',
          'BCB'
        ],{
          A: '#forge:tools/hammers',
          B: 'gtceu:t_rocket_steel_plate',
          C: 'gtceu:long_t_rocket_steel_rod',
          D: 'gtceu:rubber_ring'
        })
      event.shaped(
        Item.of("kubejs:magical_chip_v1", 1),[ 
          'AAA',
          'BCB',
          'AAA'
        ],{
          A: 'gtceu:wood_small_fluid_pipe',
          B: 'eidolon:enchanted_ash',
          C: 'kubejs:magic_board_v1'
        })

        event.shaped(
          Item.of("ad_astra:oxygen_gear", 1),[ 
            'ABA',
            'CDC',
            'CBC'
          ],{
            A: 'gtceu:hv_electric_pump',
            B: 'gtceu:rubber_ring',
            C: 'gtceu:t_rocket_steel_plate',
            D: '#gtceu:circuits/mv'
          })
  

    event.shaped(
    Item.of("ae2:nether_quartz_cutting_knife", 1),[ 
      ' AB',
      'CBD',
      'EE '
    ],{
      A: '#forge:tools/files',
      B: 'minecraft:stick',
      C: 'minecraft:iron_ingot',
      D: '#forge:tools/hammers',
      E: 'gtceu:nether_quartz_plate'
    })
  event.shaped(
    Item.of("ae2:certus_quartz_cutting_knife", 1),[ 
      ' AB',
      'CBD',
      'EE '
    ],{
      A: '#forge:tools/files',
      B: 'minecraft:stick',
      C: 'minecraft:iron_ingot',
      D: '#forge:tools/hammers',
      E: 'gtceu:certus_quartz_plate'
    })

  event.shaped(
    Item.of("ae2:crafting_terminal", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:titanium_plate',
      B: 'avaritia:compressed_crafting_table',
      C: 'ae2:calculation_processor',
      D: 'ae2:terminal'
    })
    event.shaped(
      Item.of("ae2:pattern_encoding_terminal", 1),[ 
        'ABA',
        'CDC',
        'AEA'
      ],{
        A: 'gtceu:titanium_plate',
        B: 'ae2:annihilation_core',
        C: 'ae2:engineering_processor',
        D: 'ae2:crafting_terminal',
        E: 'ae2:formation_core'
      })
  
  event.shaped(
    Item.of("ae2:annihilation_plane", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:titanium_plate',
      B: '#gtceu:circuits/hv',
      C: 'ae2:annihilation_core',
      D: 'ae2:fluix_pickaxe'
    })
    event.shaped(
      Item.of("ae2:formation_plane", 1),[ 
        'ABA',
        'CDC',
        'ABA'
      ],{
        A: 'gtceu:titanium_plate',
        B: '#gtceu:circuits/hv',
        C: 'ae2:annihilation_core',
        D: 'minecraft:dropper'
      })
  
  event.shaped(
    Item.of("ae2:fuzzy_card", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:titanium_screw',
      B: '#gtceu:circuits/hv',
      C: 'magistuarmory:woolen_fabric',
      D: 'ae2:advanced_card'
    })
  event.shaped(
    Item.of("ae2:speed_card", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:titanium_screw',
      B: '#gtceu:circuits/hv',
      C: 'gtceu:flawless_fluix_gem',
      D: 'ae2:advanced_card'
    })
    event.shaped(
      Item.of("ae2:inverter_card", 1),[ 
        'ABA',
        'CDC',
        'ABA'
      ],{
        A: 'gtceu:titanium_screw',
        B: '#gtceu:circuits/hv',
        C: 'minecraft:redstone_torch',
        D: 'ae2:advanced_card'
      })
      event.shaped(
        Item.of("ae2:equal_distribution_card", 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:titanium_screw',
          B: '#gtceu:circuits/hv',
          C: 'ae2:calculation_processor',
          D: 'ae2:advanced_card'
        })
        event.shaped(
          Item.of("ae2:energy_card", 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:titanium_screw',
            B: '#gtceu:circuits/hv',
            C: 'ae2:dense_energy_cell',
            D: 'ae2:advanced_card'
          })
  
  event.shaped(
    Item.of("minecraft:smithing_table", 1),[ 
      'AAA',
      'CBC',
      'C C'
    ],{
      A: 'gtceu:steel_plate',
      B: '#forge:tools/hammers',
      C: '#minecraft:planks'
    })
    event.shaped(
      Item.of("ae2:color_applicator", 1),[ 
        'AB ',
        'BCD',
        ' EF'
      ],{
        A: 'ae2:formation_core',
        B: 'gtceu:titanium_plate',
        C: 'ae2:cell_component_4k',
        D: '#forge:tools/wrenches',
        E: '#forge:tools/hammers',
        F: 'ae2:energy_cell'
      })
      event.shaped(
      Item.of("ae2:matter_cannon", 1),[ 
        'BBA',
        'CFD',
        'BE '
      ],{
        A: 'ae2:formation_core',
        B: 'gtceu:titanium_plate',
        C: 'ae2:cell_component_4k',
        D: '#forge:tools/wrenches',
        E: '#forge:tools/hammers',
        F: 'ae2:energy_cell'
      })
      event.shaped(
        Item.of("ae2:storage_bus", 1),[ 
          'ABC',
          'DEF',
          'CBA'
        ],{
          A: 'minecraft:piston',
          B: '#gtceu:circuits/hv',
          C: 'minecraft:sticky_piston',
          D: 'ae2:import_bus',
          E: 'ae2:interface',
          F: 'ae2:export_bus'
        })
        event.shaped(
          Item.of("ae2:import_bus", 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:stainless_steel_plate',
            B: 'ae2:annihilation_core',
            C: 'gtceu:hv_conveyor_module',
            D: 'minecraft:sticky_piston'
          })
          event.shaped(
          Item.of("ae2:export_bus", 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:stainless_steel_plate',
            B: 'ae2:formation_core',
            C: 'gtceu:hv_conveyor_module',
            D: 'minecraft:piston'
          })
  event.shaped(
    Item.of("ae2:level_emitter", 1),[ 
      ' A ',
      'BCB',
      ' A '
    ],{
      A: 'gtceu:redstone_plate',
      B: 'minecraft:redstone_torch',
      C: 'ae2:calculation_processor'
    })
    event.shaped(
      Item.of("ae2:energy_level_emitter", 1),[ 
        'DAD',
        'BCB',
        'DAD'
      ],{
        A: 'gtceu:redstone_plate',
        B: 'minecraft:redstone_torch',
        C: 'ae2:calculation_processor',
        D: 'ae2:charged_certus_quartz_crystal'
      })
      event.shaped(
        Item.of("ae2:advanced_card", 1),[ 
          'AB ',
          'CDB',
          'AB '
        ],{
          A: 'gtceu:diamond_plate',
          B: 'gtceu:titanium_plate',
          C: 'ae2:basic_card',
          D: 'kubejs:calculation_processor_v2'
        })
        event.shaped(
        Item.of("ae2:redstone_card", 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:stainless_steel_screw',
          B: 'minecraft:redstone_torch',
          C: '#gtceu:circuits/mv',
          D: 'ae2:basic_card'
        })
        event.shaped(
          Item.of("ae2:capacity_card", 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:stainless_steel_screw',
            B: 'ae2:cell_component_1k',
            C: '#gtceu:circuits/mv',
            D: 'ae2:basic_card'
          })
        event.shaped(
          Item.of("ae2:void_card", 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:stainless_steel_screw',
            B: 'trashcans:item_trash_can',
            C: '#gtceu:circuits/mv',
            D: 'ae2:basic_card'
          })
        event.shaped(
          Item.of("ae2:crafting_card", 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:stainless_steel_screw',
            B: 'minecraft:crafting_table',
            C: '#gtceu:circuits/mv',
            D: 'ae2:basic_card'
          })
  event.shaped(
    Item.of("thermal:potion_infuser", 1),[ 
      'ABA',
      'CDC',
      ' C '
    ],{
      A: 'gtceu:rubber_plate',
      B: 'minecraft:glass_bottle',
      C: 'gtceu:bronze_plate',
      D: 'gtceu:gold_gear'
    })
  event.shaped(
    Item.of("thermal:device_fisher", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'minecraft:fishing_rod',
      B: '#gtceu:circuits/luv',
      C: 'elementalcraft:pristine_water_gem',
      D: 'gtceu:ev_fisher'
    })

  event.shaped(
    Item.of("thermal:potion_quiver", 1),[ 
      'A A',
      'BCD',
      'EAE'
    ],{
      A: 'gtceu:bronze_plate',
      B: 'minecraft:glass_bottle',
      C: 'gtceu:gold_gear',
      D: 'minecraft:string',
      E: 'gtceu:rubber_plate'
    })

  event.shaped(
    Item.of("ae2:certus_quartz_wrench", 1),[ 
      'ABA',
      ' A ',
      ' A '
    ],{
      A: 'gtceu:certus_quartz_plate',
      B: '#forge:tools/wrenches'
    })
    event.shaped(
      Item.of("ae2:nether_quartz_wrench", 1),[ 
        'ABA',
        ' A ',
        ' A '
      ],{
        A: 'gtceu:nether_quartz_plate',
        B: '#forge:tools/wrenches'
      })
  
  event.shaped(
    Item.of("ae2:wireless_crafting_terminal", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:double_titanium_plate',
      B: 'avaritia:double_compressed_crafting_table',
      C: 'kubejs:calculation_processor_v5',
      D: 'ae2:wireless_terminal'
    })
    event.shaped(
      Item.of("ae2:charged_staff", 1),[ 
        'AA ',
        'ABC',
        ' DB'
      ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'gtceu:stainless_steel_rod',
        C: '#forge:tools/hammers',
        D: '#forge:tools/wrenches'
      })
  
  event.shaped(
    Item.of("ae2:wireless_terminal", 1),[ 
      'AAA',
      'BCB',
      'DED'
    ],{
      A: 'ae2:wireless_receiver',
      B: 'kubejs:calculation_processor_v4',
      C: 'ae2:terminal',
      D: 'gtceu:titanium_plate',
      E: 'ae2:dense_energy_cell'
    })
    event.shaped(
      Item.of("ae2:terminal", 1),[ 
        'ABA',
        'CDE',
        'ABA'
      ],{
        A: 'gtceu:stainless_steel_plate',
        B: 'ae2:logic_processor',
        C: 'ae2:formation_core',
        D: '#ae2:illuminated_panel',
        E: 'ae2:annihilation_core'
      })
  
  event.shaped(
    Item.of('elementalcraft:evaporator', 1),[ 
      'ABA',
      'CDC',
      'AEA'
    ],{
      A: 'gtceu:lead_plate',
      B: 'gtceu:glass_plate',
      C: 'elementalcraft:contained_crystal',
      D: 'minecraft:brewing_stand',
      E: 'gtceu:mv_electric_pump'
    })
    event.shaped(
      Item.of('elementalcraft:infuser', 1),[ 
        'ABA',
        'CDC',
        'AEA'
      ],{
        A: 'gtceu:lead_plate',
        B: 'gtceu:lead_ring',
        C: 'elementalcraft:contained_crystal',
        D: 'gtceu:lead_plate',
        E: 'gtceu:mv_electric_pump'
      })
      event.shaped(
        Item.of('elementalcraft:binder', 1),[ 
          'ABA',
          'CDC',
          'EEE'
        ],{
          A: 'gtceu:drenched_iron_plate',
          B: 'gtceu:long_lead_rod',
          C: 'elementalcraft:contained_crystal',
          D: 'gtceu:drenched_iron_gear',
          E: 'elementalcraft:whiterock'
        })
      event.shaped(
        Item.of('elementalcraft:binder_improved', 1),[ 
          'ABA',
          'ACA',
          'DED'
        ],{
          A: 'gtceu:swift_alloy_plate',
          B: 'elementalcraft:infuser',
          C: 'elementalcraft:binder',
          D: 'elementalcraft:whiterock',
          E: 'elementalcraft:purecrystal'
        })
        event.shaped(
          Item.of('elementalcraft:elementpipe_improved', 2),[ 
            ' A ',
            'BCB',
            ' A '
          ],{
            A: 'elementalcraft:elementpipe',
            B: 'gtceu:swift_alloy_plate',
            C: 'elementalcraft:strongly_contained_crystal'
          })
        event.shaped(
          Item.of('elementalcraft:chisel', 1),[ 
            ' A ',
            'BCA',
            'DE '
          ],{
            A: 'gtceu:swift_alloy_plate',
            B: '#forge:tools/files',
            C: 'gtceu:diamond_plate',
            D: 'elementalcraft:hardened_handle',
            E: '#forge:tools/hammers'
          })
          event.shaped(
            Item.of('rechiseled:chisel', 1),[ 
              '  A',
              'BA ',
              'DE '
            ],{
              A: 'gtceu:iron_plate',
              B: '#forge:tools/files',
              D: 'minecraft:stick',
              E: '#forge:tools/hammers'
            })
            event.shaped(
              Item.of('elementalcraft:crystallizer', 1),[ 
                'ABA',
                'ACA',
                'BDB'
              ],{
                A: 'gtceu:swift_alloy_plate',
                B: 'elementalcraft:whiterock',
                C: 'gtceu:hv_electric_pump',
                D: 'elementalcraft:strongly_contained_crystal'
              })
            event.shaped(
              Item.of('elementalcraft:inscriber', 1),[ 
                ' AB',
                'ACB',
                'ADA'
              ],{
                B: 'gtceu:swift_alloy_plate',
                C: 'minecraft:enchanting_table',
                A: 'elementalcraft:whiterock',
                D: 'elementalcraft:strongly_contained_crystal'
              })
              event.shaped(
                Item.of('elementalcraft:extractor', 1),[ 
                  'ABA',
                  'ACA',
                  'ABA'
                ],{
                  A: 'gtceu:lead_plate',
                  B: 'elementalcraft:contained_crystal',
                  C: 'gtceu:mv_electric_pump'
                })
                event.shaped(
                Item.of('elementalcraft:extractor_improved', 1),[ 
                  'AAA',
                  'BCB',
                  'DDD'
                ],{
                  A: 'elementalcraft:extractor',
                  B: 'gtceu:swift_alloy_plate',
                  C: 'elementalcraft:purecrystal',
                  D: 'elementalcraft:whiterock'
                })
                event.shaped(
                Item.of('elementalcraft:air_mill_grindstone', 1),[ 
                  'ABA',
                  'BCB',
                  'DED'
                ],{
                  A: 'magistuarmory:woolen_fabric',
                  B: 'gtceu:drenched_iron_plate',
                  C: 'gtceu:diamond_grinding_head',
                  D: 'elementalcraft:whiterock',
                  E: 'elementalcraft:aircrystal'
                })
                event.shaped(
                Item.of('elementalcraft:drenched_saw_blade', 1),[ 
                  'ABA',
                  'BCB',
                  'ABA'
                ],{
                  A: 'elementalcraft:drenched_iron_ingot',
                  B: 'gtceu:drenched_iron_plate',
                  C: 'elementalcraft:air_silk'
                })
                event.shaped(
                  Item.of('elementalcraft:water_mill_wood_saw', 1),[ 
                    'AAA',
                    'BCB',
                    'ADA'
                  ],{
                    A: 'elementalcraft:whiterock',
                    B: 'gtceu:drenched_iron_plate',
                    C: 'elementalcraft:drenched_saw_blade',
                    D: 'elementalcraft:watercrystal'
                  })
    event.shaped(
      Item.of('thermal:device_potion_diffuser', 1),[ 
        'ABA',
        'CDC',
        'ABA'
      ],{
        A: 'gtceu:sterling_silver_plate',
        B: 'thermal:redstone_servo',
        C: 'minecraft:dispenser',
        D: 'thermal:fluid_cell'
      })
    event.shaped(
      Item.of('thermal:item_filter_augment', 1),[ 
        ' A ',
        'ABA',
        ' A '
      ],{
        A: 'gtceu:signalum_plate',
        B: 'gtceu:item_filter'
      })
      event.shaped(
        Item.of('thermal:fluid_filter_augment', 1),[ 
          ' A ',
          'ABA',
          ' A '
        ],{
          A: 'gtceu:signalum_plate',
          B: 'gtceu:fluid_filter'
        })
      event.shaped(
        Item.of('thermal:rf_potato', 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:battery_alloy_plate',
          B: 'gtceu:lithium_dust',
          C: 'gtceu:rubber_rod',
          D: 'minecraft:potato'
        })

      event.shaped(
        Item.of('thermal:flux_capacitor', 1),[ 
          'ABA',
          'CDC',
          'ACA'
        ],{
          A: 'gtceu:battery_alloy_plate',
          B: '#gtceu:circuits/mv',
          C: 'thermal:rf_coil',
          D: 'gtceu:lapotron_gem'
        })
  
    event.shaped(
      Item.of('thermal:upgrade_augment_1', 1),[ 
        'AAA',
        'BCB',
        'DDD'
      ],{
        A: 'gtceu:invar_plate',
        B: '#gtceu:circuits/mv',
        C: 'gtceu:gold_gear',
        D: 'gtceu:red_alloy_plate'
      })
      event.shaped(
        Item.of('thermal:upgrade_augment_2', 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:rose_gold_plate',
          B: '#gtceu:circuits/hv',
          C: 'gtceu:signalum_gear',
          D: 'thermal:upgrade_augment_1'
        })
        event.shaped(
          Item.of('thermal:upgrade_augment_3', 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:enderium_plate',
            B: '#gtceu:circuits/ev',
            C: 'gtceu:lumium_gear',
            D: 'thermal:upgrade_augment_2'
          })
  
    event.shaped(
      Item.of('botania:diluted_pool', 1),[ 
        'ABA',
        'CDC',
        'CCC'
      ],{
        A: 'kubejs:light_blue_petal',
        B: 'kubejs:blue_petal',
        C: 'botania:livingrock',
        D: 'gtceu:drenched_iron_dust'
      })
      event.shaped(
        Item.of('integrateddynamics:drying_basin', 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:treated_wood_planks',
          B: 'gtceu:chemical_black_dye',
          C: 'gtceu:steel_plate',
          D: 'minecraft:cauldron'
        })
      event.shaped(
        Item.of('integrateddynamics:mechanical_drying_basin', 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:obsidian_plate',
          B: '#gtceu:circuits/mv',
          C: 'integrateddynamics:energy_battery',
          D: 'integrateddynamics:drying_basin'
        })

        event.shaped(
          Item.of('hexerei:herb_drying_rack', 1),[ 
            ' A ',
            'B B',
            'CCC'
          ],{
            A: 'gtceu:treated_wood_rod',
            B: 'minecraft:string',
            C: 'gtceu:treated_wood_slab'
          })
    event.shaped(
      Item.of('thermal:machine_frame', 1),[ 
        'AAA',
        'BCB',
        'AAA'
      ],{
        A: 'gtceu:invar_plate',
        B: 'thermal:redstone_servo',
        C: 'gtceu:invar_gear'
      })
      event.shaped(
        Item.of('thermal:energy_cell_frame', 1),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          A: 'gtceu:lead_plate',
          B: 'gtceu:glass_plate',
          C: 'gtceu:lumium_gear'
        })
      event.shaped(
        Item.of('thermal:fluid_cell_frame', 1),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          A: 'gtceu:bronze_plate',
          B: 'gtceu:glass_plate',
          C: 'gtceu:bronze_gear'
        })
        event.shaped(
          Item.of('thermal:fluid_cell', 1),[ 
            'ABA',
            'CDC',
            'AEA'
          ],{
            A: 'gtceu:rubber_plate',
            B: 'thermal:obsidian_glass',
            C: 'gtceu:steel_plate',
            D: 'thermal:fluid_cell_frame',
            E: 'thermal:redstone_servo'
          })
          event.shaped(
          Item.of('thermal:energy_cell', 1),[ 
            'ABA',
            'CDC',
            'AEA'
          ],{
            A: 'gtceu:rubber_plate',
            B: 'thermal:lumium_glass',
            C: 'gtceu:steel_plate',
            D: 'thermal:energy_cell_frame',
            E: 'thermal:rf_coil'
          })
    event.shaped(
      Item.of('thermal:tinker_bench', 1),[ 
        'ABA',
        'CDC',
        'EFE'
      ],{
        A: 'gtceu:mv_electric_pump',
        B: 'minecraft:anvil',
        C: 'thermal:redstone_servo',
        D: 'thermal:energy_cell',
        E: 'gtceu:stainless_steel_plate',
        F: 'thermal:rf_coil'
      })
    event.shaped(
      Item.of('thermal:charge_bench', 1),[ 
        'AAA',
        'BCB',
        'DED'
      ],{
        A: 'gtceu:lumium_plate',
        B: 'thermal:rf_coil',
        C: 'thermal:energy_cell',
        D: 'gtceu:lead_plate',
        E: 'gtceu:energy_crystal'
      })

          event.shaped(
      Item.of('thermal:device_rock_gen', 1),[ 
        'ABC',
        'DED',
        'FGH'
      ],{
        A: 'gtceu:mv_electric_motor',
        B: 'gtceu:mv_electric_piston',
        C: 'minecraft:diamond',
        D: 'thermal:redstone_servo',
        E: 'thermal:machine_frame',
        F: 'minecraft:water_bucket',
        G: 'gtceu:invar_gear',
        H: 'minecraft:lava_bucket'
      })
      event.shaped(
        Item.of('thermal:device_collector', 1),[ 
          'ABA',
          'CDC',
          'AEA'
        ],{
          A: 'gtceu:steel_plate',
          B: 'minecraft:ender_eye',
          C: 'gtceu:mv_conveyor_module',
          D: 'minecraft:hopper',
          E: 'thermal:redstone_servo'
        })
        event.shaped(
        Item.of('thermal:xp_crystal', 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'minecraft:experience_bottle',
          B: 'gtceu:exquisite_lapis_gem',
          C: 'gtceu:exquisite_emerald_gem',
          D: 'gtceu:energy_crystal'
        })
        event.shaped(
        Item.of('thermal:device_xp_condenser', 1),[ 
          'ABA',
          'CDC',
          'EAE'
        ],{
          A: 'gtceu:sterling_silver_plate',
          B: 'thermal:lumium_glass',
          C: 'thermal:xp_crystal',
          D: 'thermal:machine_frame',
          E: 'thermal:redstone_servo'
        })
        event.shaped(
          Item.of('trashcans:item_trash_can', 1),[ 
            'AAA',
            'BCB',
            'BBB'
          ],{
            A: 'gtceu:iron_plate',
            B: 'gtceu:wrought_iron_plate',
            C: 'minecraft:ender_pearl'
          })
        event.shaped(
          Item.of('trashcans:liquid_trash_can', 1),[ 
            'ABA',
            'ACA',
            'ABA'
          ],{
            A: 'gtceu:lapis_dust',
            B: 'minecraft:bucket',
            C: 'trashcans:item_trash_can'
          })
          event.shaped(
            Item.of('trashcans:energy_trash_can', 1),[ 
              'ABA',
              'ACA',
              'ABA'
            ],{
              A: 'gtceu:red_alloy_dust',
              B: 'gtceu:red_alloy_single_cable',
              C: 'trashcans:item_trash_can'
            })
    event.shaped(
      Item.of('thermal:device_nullifier', 1),[ 
        'ABA',
        'CDE',
        'ABA'
      ],{
        A: 'gtceu:tin_plate',
        B: 'thermal:obsidian_glass',
        C: 'trashcans:item_trash_can',
        D: 'thermal:machine_frame',
        E: 'trashcans:liquid_trash_can'
      })

    event.shaped(
      Item.of('botania:mana_spreader', 1),[ 
        'AAA',
        'BCD',
        'AAA'
      ],{
        A: '#botania:livingwood_logs',
        B: 'gtceu:swift_alloy_plate',
        C: 'minecraft:dispenser',
        D: '#elementalcraft:gems/fine_earth'
      })
    event.shaped(
      Item.of('botania:manaweave_cloth', 1),[ 
        ' A ',
        'ABA',
        ' A '
      ],{
        A: 'botania:mana_string',
        B: 'magistuarmory:woolen_fabric'
      })

  event.shaped(
    Item.of("ae2:spatial_pylon", 1),[ 
      'ABA',
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:titanium_plate',
      B: 'ae2:fluix_smart_cable',
      C: 'ae2:fluix_dust',
      D: 'gtceu:flawless_fluix_gem'
    })
    event.shaped(
      Item.of("gtceu:ev_machine_hull", 1),[ 
        '   ',
        'ABA',
        'CDC'
      ],{
        A: 'gtceu:swift_alloy_plate',
        B: 'gtceu:titanium_plate',
        C: 'gtceu:aluminium_single_cable',
        D: 'gtceu:ev_machine_casing'
      })
      event.shaped(
        Item.of("ae2:certus_quartz_sword", 1),[ 
          ' A ', 
          'BAC',
          ' D '
        ],{
          A: 'gtceu:certus_quartz_plate',
          B: '#forge:tools/hammers',
          C: '#forge:tools/files',
          D: 'minecraft:stick'
        })
        event.shaped(
          Item.of("ae2:certus_quartz_shovel", 1),[ 
            'BAC', 
            ' D ',
            ' D '
          ],{
            A: 'gtceu:certus_quartz_plate',
            B: '#forge:tools/hammers',
            C: '#forge:tools/files',
            D: 'minecraft:stick'
          })
          event.shaped(
            Item.of("ae2:certus_quartz_pickaxe", 1),[ 
              'AEE', 
              'BDC',
              ' D '
            ],{
              A: 'gtceu:certus_quartz_plate',
              B: '#forge:tools/hammers',
              C: '#forge:tools/files',
              D: 'minecraft:stick',
              E: '#forge:gems/certus_quartz'
            })
            event.shaped(
              Item.of("ae2:certus_quartz_axe", 1),[ 
                'AEC', 
                'AD ',
                'BD '
              ],{
                A: 'gtceu:certus_quartz_plate',
                B: '#forge:tools/hammers',
                C: '#forge:tools/files',
                D: 'minecraft:stick',
                E: '#forge:gems/certus_quartz'
              })
              event.shaped(
                Item.of("ae2:certus_quartz_hoe", 1),[ 
                  'AEC', 
                  'BD ',
                  ' D '
                ],{
                  A: 'gtceu:certus_quartz_plate',
                  B: '#forge:tools/hammers',
                  C: '#forge:tools/files',
                  D: 'minecraft:stick',
                  E: '#forge:gems/certus_quartz'
                })
                event.shaped(
                  Item.of("ae2:nether_quartz_sword", 1),[ 
                    ' A ', 
                    'BAC',
                    ' D '
                  ],{
                    A: 'gtceu:nether_quartz_plate',
                    B: '#forge:tools/hammers',
                    C: '#forge:tools/files',
                    D: 'minecraft:stick'
                  })
                  event.shaped(
                    Item.of("ae2:nether_quartz_shovel", 1),[ 
                      'BAC', 
                      ' D ',
                      ' D '
                    ],{
                      A: 'gtceu:nether_quartz_plate',
                      B: '#forge:tools/hammers',
                      C: '#forge:tools/files',
                      D: 'minecraft:stick'
                    })
                    event.shaped(
                      Item.of("ae2:nether_quartz_pickaxe", 1),[ 
                        'AEE', 
                        'BDC',
                        ' D '
                      ],{
                        A: 'gtceu:nether_quartz_plate',
                        B: '#forge:tools/hammers',
                        C: '#forge:tools/files',
                        D: 'minecraft:stick',
                        E: '#forge:gems/nether_quartz'
                      })
                      event.shaped(
                        Item.of("ae2:nether_quartz_axe", 1),[ 
                          'AEC', 
                          'AD ',
                          'BD '
                        ],{
                          A: 'gtceu:nether_quartz_plate',
                          B: '#forge:tools/hammers',
                          C: '#forge:tools/files',
                          D: 'minecraft:stick',
                          E: '#forge:gems/nether_quartz'
                        })
                        event.shaped(
                          Item.of("ae2:nether_quartz_hoe", 1),[ 
                            'AEC', 
                            'BD ',
                            ' D '
                          ],{
                            A: 'gtceu:nether_quartz_plate',
                            B: '#forge:tools/hammers',
                            C: '#forge:tools/files',
                            D: 'minecraft:stick',
                            E: '#forge:gems/nether_quartz'
                          })
          
    event.shaped(
      Item.of("ae2:interface", 1),[ 
        'ABA',
        'CDE',
        'ABA'
      ],{
        A: 'gtceu:titanium_plate',
        B: 'ae2:fluix_smart_cable',
        C: 'ae2:annihilation_core',
        D: 'gtceu:ev_machine_hull',
        E: 'ae2:formation_core'
      })
      event.shaped(
        Item.of('thermal:machine_insolator', 1),[ 
          'ABA',
          'CDC',
          'BEB'
        ],{
          A: '#gtceu:circuits/iv',
          B: 'gtceu:laminated_glass',
          C: 'gtceu:iv_electric_pump',
          D: 'gtceu:iv_machine_hull',
          E: 'gtceu:platinum_single_cable'
        })
        event.shaped(
          Item.of('thermal:item_buffer', 1),[ 
            'ABA',
            'CDC',
            'AEA'
          ],{
            A: 'gtceu:signalum_plate',
            B: 'gtceu:item_filter',
            C: '#gtceu:circuits/lv',
            D: 'minecraft:chest',
            E: 'gtceu:item_tag_filter'
          })
  
      event.shaped(
        Item.of("ae2:cell_workbench", 1),[ 
          'ABA',
          'CDC',
          'AEA'
        ],{
          A: 'gtceu:titanium_plate',
          B: 'gtceu:computer_monitor_cover',
          C: 'gtceu:titanium_screw',
          D: 'minecraft:crafting_table',
          E: 'ae2:calculation_processor'
        })
        event.shaped(
          Item.of("ae2:io_port", 1),[ 
            'AAA',
            'BCB',
            'CDC'
          ],{
            A: 'gtceu:titanium_plate',
            B: 'ae2:drive',
            C: 'ae2:fluix_smart_cable',
            D: 'ae2:logic_processor'
          })
          event.shaped(
            Item.of("ae2:condenser", 1),[ 
              'AAA',
              'BCB',
              'CDC'
            ],{
              A: 'gtceu:ev_electric_piston',
              B: 'ae2:fluix_pearl',
              C: 'gtceu:ev_machine_hull',
              D: 'ae2:fluix_covered_cable'
            })
            event.shaped(
              Item.of("ae2:energy_acceptor", 1),[ 
                'ABA',
                'BCB',
                'ABA'
              ],{
                A: 'gtceu:titanium_plate',
                B: 'gtceu:flawless_fluix_gem',
                C: 'gtceu:lumium_plate'
              })
              event.shaped(
                Item.of("ae2:vibration_chamber", 1),[ 
                  'ABA',
                  'BCB',
                  'DED'
                ],{
                  A: 'gtceu:titanium_screw',
                  B: 'gtceu:steel_plate',
                  C: 'gtceu:ev_machine_hull',
                  D: 'ae2:fluix_covered_cable',
                  E: 'ae2:energy_acceptor'
                })
                event.shaped(
                  Item.of("ae2:growth_accelerator", 1),[ 
                    'AAA',
                    'BCB',
                    'DED'
                  ],{
                    A: 'ae2:quartz_glass',
                    B: 'ae2:fluix_smart_cable',
                    C: 'gtceu:ev_autoclave',
                    D: 'ae2:engineering_processor',
                    E: 'ae2:charged_certus_quartz_crystal'
                  })
                  event.shaped(
                    Item.of("ae2:energy_cell", 1),[ 
                      'ABA',
                      'CDC',
                      'EAE'
                    ],{
                      A: 'gtceu:blue_alloy_plate',
                      B: 'gtceu:exquisite_fluix_gem',
                      C: '#gtceu:circuits/hv',
                      D: 'gtceu:fluix_block',
                      E: 'gtceu:blue_alloy_quadruple_cable'
                    })
                    event.shaped(
                      Item.of("ae2:dense_energy_cell", 1),[ 
                        'AAA',
                        'BCB',
                        'ADA'
                      ],{
                        A: 'ae2:energy_cell',
                        B: '#gtceu:circuits/luv',
                        C: 'kubejs:calculation_processor_v3',
                        D: 'gtceu:ev_battery_buffer_16x'
                      })
                      event.shaped(
                        Item.of("ae2:crafting_unit", 1),[ 
                          'ABA',
                          'CDC',
                          'AEA'
                        ],{
                          A: 'gtceu:titanium_plate',
                          B: 'ae2:engineering_processor',
                          C: 'ae2:fluix_smart_cable',
                          D: 'ae2:logic_processor',
                          E: 'ae2:calculation_processor'
                        })
                        event.shaped(
                          Item.of("ae2:molecular_assembler", 1),[ 
                            'ABA',
                            'CDE',
                            'ABA'
                          ],{
                            A: 'gtceu:titanium_plate',
                            B: 'ae2:quartz_glass',
                            C: 'ae2:annihilation_core',
                            E: 'ae2:formation_core',
                            D: 'gtceu:ev_assembler'
                          })
                          event.shaped(
                            Item.of("ae2:light_detector", 1),[ 
                              ' A ',
                              ' B '
                            ],{
                              A: 'minecraft:quartz',
                              B: 'gtceu:iron_rod'
                            })
                            event.shaped(
                              Item.of("ae2:wireless_receiver", 1),[ 
                                'ABA',
                                ' C ',
                                'DED'
                              ],{
                                A: 'ae2:fluix_glass_cable',
                                B: 'ae2:fluix_pearl',
                                C: 'gtceu:long_enderium_rod',
                                D: 'gtceu:stainless_steel_plate',
                                E: '#gtceu:circuits/hv'
                              })
                              event.shaped(
                                Item.of("ae2:fluix_pearl", 1),[ 
                                  'ABA',
                                  'BCB',
                                  'ABA'
                                ],{
                                  A: 'gtceu:flawless_fluix_gem',
                                  B: 'gtceu:enderium_plate',
                                  C: 'minecraft:ender_pearl'
                                })
        
    event.shaped(
      Item.of("ae2:drive", 1),[ 
        'ABA',
        'CDC',
        'ABA'
      ],{
        A: 'gtceu:titanium_plate',
        B: 'ae2:engineering_processor',
        C: 'ae2:fluix_dust',
        D: 'ae2:chest'
      })
  
    event.shaped(
      Item.of("ae2:spatial_io_port", 1),[ 
        'ABA',
        'CDC',
        'AEA'
      ],{
        A: 'gtceu:titanium_plate',
        B: 'ae2:spatial_pylon',
        C: 'ae2:fluix_smart_cable',
        D: 'ae2:io_port',
        E: 'ae2:engineering_processor'
      })
  
    event.shaped(
      Item.of("ae2:chest", 1),[ 
        'ABA',
        'CDC',
        'EEE'
      ],{
        A: 'ae2:quartz_glass',
        B: 'ae2:terminal',
        C: 'ae2:fluix_covered_cable',
        D: 'gtceu:mv_super_chest',
        E: 'gtceu:stainless_steel_plate'
      })
  
  event.shaped(
    Item.of("ae2:quantum_ring", 1),[ 
      'ABA',
      'CDE',
      'ABA'
    ],{
      A: 'gtceu:titanium_plate',
      B: 'ae2:logic_processor',
      C: 'ae2:engineering_processor',
      D: 'ae2:energy_cell',
      E: 'ae2:fluix_smart_dense_cable'
    })
    event.shaped(
      Item.of("ae2:item_cell_housing", 1),[ 
        'ABA',
        'B B',
        'CCC'
      ],{
        A: 'ae2:quartz_glass',
        B: 'gtceu:blue_alloy_plate',
        C: 'gtceu:stainless_steel_plate'
      })
    event.shaped(
      Item.of("ae2:fluid_cell_housing", 1),[ 
        'ABA',
        'B B',
        'CCC'
      ],{
        A: 'ae2:quartz_glass',
        B: 'gtceu:red_alloy_plate',
        C: 'gtceu:stainless_steel_plate'
      })
    event.shaped(
      Item.of("ae2:blank_pattern", 1),[ 
        'ABA',
        'BDB',
        'CCC'
      ],{
        A: 'ae2:quartz_glass',
        B: 'gtceu:lumium_plate',
        C: 'gtceu:stainless_steel_plate',
        D: 'ae2:charged_certus_quartz_crystal'
      })
        event.shaped(
        Item.of('ae2:wireless_booster', 1),[ 
          ' A ',
          'BCD',
          'EEE'
        ],{
          A: 'kubejs:ccq_dust',
          B: 'ae2:fluix_dust',
          C: 'kubejs:calculation_processor_v4',
          D: 'gtceu:enderium_dust',
          E: 'gtceu:tungsten_steel_plate'
        })
        event.shaped(
          Item.of("ae2:spatial_cell_component_2", 1),[ 
            'ABA',
            'BCB',
            'ABA'
          ],{
            A: 'gtceu:lumium_dust',
            B: 'ae2:fluix_pearl',
            C: 'ae2:engineering_processor'
          })
          event.shaped(
            Item.of("ae2:spatial_cell_component_16", 1),[ 
              'ABA',
              'BCB',
              'ABA'
            ],{
              A: '#gtceu:circuits/hv',
              B: 'ae2:spatial_cell_component_2',
              C: 'kubejs:calculation_processor_v2'
            })
          event.shaped(
            Item.of("ae2:spatial_cell_component_128", 1),[ 
              'ABA',
              'BCB',
              'ABA'
            ],{
              A: '#gtceu:circuits/iv',
              B: 'ae2:spatial_cell_component_16',
              C: 'kubejs:calculation_processor_v5'
            })
          event.shaped(
            Item.of("ae2:basic_card", 1),[ 
              'AB ',
              'CDB',
              'AB '
            ],{
              A: 'gtceu:rose_gold_plate',
              B: 'gtceu:stainless_steel_plate',
              C: 'gtceu:blue_alloy_dust',
              D: 'ae2:calculation_processor'
            })
          event.shaped(
            Item.of("ae2:spatial_anchor", 1),[ 
              'AAA',
              'BCB',
              'DED'
            ],{
              A: 'ae2:spatial_pylon',
              B: 'ae2:fluix_smart_dense_cable',
              C: 'ae2:spatial_cell_component_128',
              D: 'gtceu:titanium_plate',
              E: 'ae2:engineering_processor'
            })
            event.shaped(
              Item.of("ae2:view_cell", 1),[ 
                'ABA',
                'BCB',
                'DDD'
              ],{
                A: 'ae2:quartz_glass',
                B: 'gtceu:blue_alloy_plate',
                C: 'ae2:charged_certus_quartz_crystal',
                D: 'gtceu:stainless_steel_plate'
              })
  

    event.shaped(
      Item.of("ae2:cell_component_1k", 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: 'gtceu:blue_alloy_dust',
        B: 'gtceu:flawless_fluix_gem',
        C: 'ae2:logic_processor'
      })
    event.shaped(
      Item.of("ae2:cell_component_4k", 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: '#gtceu:circuits/lv',
        B: 'ae2:cell_component_1k',
        C: 'ae2:calculation_processor'
      })
    event.shaped(
      Item.of("ae2:cell_component_16k", 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: '#gtceu:circuits/mv',
        B: 'ae2:cell_component_4k',
        C: 'kubejs:calculation_processor_v2'
      })
      event.shaped(
        Item.of("ae2:cell_component_64k", 1),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          A: '#gtceu:circuits/hv',
          B: 'ae2:cell_component_16k',
          C: 'kubejs:calculation_processor_v3'
        })
        event.shaped(
          Item.of("ae2:cell_component_256k", 1),[ 
            'ABA',
            'BCB',
            'ABA'
          ],{
            A: '#gtceu:circuits/ev',
            B: 'ae2:cell_component_64k',
            C: 'kubejs:calculation_processor_v4'
          })
        event.shaped(
          Item.of('ae2:annihilation_core', 2),[ 
            'ABA',
            'BCB',
            'ABA'
          ],{
            A: 'gtceu:battery_alloy_rod',
            B: 'ae2:logic_processor',
            C: 'gtceu:flawless_fluix_gem'
          })
          event.shaped(
            Item.of('ae2:formation_core', 2),[ 
              'ABA',
              'BCB',
              'ABA'
            ],{
              B: 'gtceu:battery_alloy_rod',
              A: 'ae2:logic_processor',
              C: 'gtceu:flawless_fluix_gem'
            })
          event.shaped(
            Item.of('ae2:pattern_provider', 1),[ 
              'ABA',
              'CDE',
              'ABA'
            ],{
              A: 'ae2:quartz_vibrant_glass',
              B: 'ae2:fluix_smart_cable',
              C: 'ae2:annihilation_core',
              D: 'avaritia:compressed_crafting_table',
              E: 'ae2:formation_core'
            })
            event.shaped(
              Item.of('botania:apothecary_default', 1),[ 
                'ABA',
                'CDE',
                'FGF'
              ],{
                A: 'gtceu:drenched_iron_plate',
                B: 'gtceu:mv_field_generator',
                C: '#forge:tools/wrenches',
                D: 'gtceu:titanium_block',
                E: '#forge:tools/hammers',
                F: 'gtceu:stainless_steel_turbine_casing',
                G: 'gtceu:titanium_turbine_casing'
              })
  
      event.shaped(
        Item.of("ae2:quantum_link", 1),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          A: 'ae2:quartz_glass',
          B: 'ae2:fluix_pearl',
          C: 'gtceu:exquisite_fluix_gem'
        })
  
  event.shaped(
    Item.of("ae2:inscriber", 1),[ 
      'ABA',
      'CDC',
      'EFE'
    ],{
      A: 'gtceu:hv_emitter',
      B: 'gtceu:exquisite_certus_quartz_gem',
      C: '#gtceu:circuits/hv',
      D: 'gtceu:hv_machine_hull',
      E: 'ae2:fluix_glass_cable',
      F: 'gtceu:hv_electric_piston'
    })  
    event.shaped(
      Item.of('ae2:wireless_access_point', 1),[ 
        ' A ',
        'BCB',
        'DDD'
      ],{
        A: 'ae2:wireless_receiver',
        B: 'ae2:fluix_covered_cable',
        C: 'ae2:calculation_processor',
        D: 'gtceu:titanium_plate'
      })
  
    event.shaped(
      Item.of('ae2:sky_stone_tank', 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: 'ae2:sky_stone_block',
        B: 'ae2:quartz_glass',
        C: 'gtceu:steel_plate'
      })
  
    event.shaped(
      Item.of('ae2:quartz_fixture', 2),[ 
        'A  ',
        'B  '
      ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'gtceu:iron_rod'
      })
  
    event.shaped(
      Item.of('ae2:semi_dark_monitor', 1),[ 
        'ACD',
        'BCD',
        'ACD'
      ],{
        A: 'gtceu:lumium_plate',
        B: 'gtceu:steel_plate',
        C: 'gtceu:fine_blue_alloy_wire',
        D: 'ae2:quartz_glass'
      })
  
    event.shaped(
      Item.of('ae2:sky_stone_chest', 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: 'ae2:smooth_sky_stone_block',
        B: 'ae2:sky_stone_block',
        C: 'minecraft:flint'
      })
      event.shaped(
        Item.of('ae2:smooth_sky_stone_chest', 1),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          B: 'ae2:smooth_sky_stone_block',
          A: 'ae2:sky_stone_block',
          C: 'minecraft:flint'
        })
      event.shaped(
        Item.of('ars_nouveau:archwood_chest', 1),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          A: '#forge:logs/archwood',
          B: '#forge:planks/archwood',
          C: 'gtceu:gold_plate'
        })
        event.shaped(
          Item.of('quark:pickarang', 1),[ 
            'ABC',
            ' DB',
            'E A'
          ],{
            A: 'gtceu:diamond_plate',
            B: '#minecraft:planks',
            C: 'quark:diamond_heart',
            D: '#forge:tools/hammers',
            E: '#forge:tools/files'
          })
        event.shaped(
          Item.of('quark:obsidian_pressure_plate', 1),[ 
            'ABA',
            'CDC',
            'AEA'
          ],{
            A: 'gtceu:steel_screw',
            B: '#forge:tools/hammers',
            C: 'gtceu:obsidian_plate',
            D: 'gtceu:steel_spring',
            E: '#forge:tools/screwdrivers'
          })
        event.shaped(
          Item.of('quark:redstone_randomizer', 1),[ 
            ' A ',
            'ABA'
          ],{
            A: 'minecraft:prismarine_crystals',
            B: 'minecraft:comparator'
          })

  event.shaped(
    Item.of('storagenetwork:kabel', 2),[ 
      'AAA',
      'BCD',
      'AAA'
    ],{
      A: 'gtceu:glass_plate',
      B: 'gtceu:quartzite_dust',
      C: 'gtceu:nether_quartz_dust',
      D: 'gtceu:ice_shard_dust'
    })
    event.shaped(
      Item.of('ae2:quartz_fiber', 2),[ 
        'AAA',
        'BBB',
        'AAA'
      ],{
        A: 'gtceu:glass_plate',
        B: 'gtceu:certus_quartz_dust'
      })
  
    event.shaped(
      Item.of('storagenetwork:speed_upgrade', 1),[ 
        'ABA',
        'CDC',
        'ABA'
      ],{
        A: 'gtceu:red_alloy_screw',
        B: 'thermal:redstone_servo',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:polyethylene_plate'
      })
      event.shaped(
        Item.of('storagenetwork:stack_upgrade', 1),[ 
          'ABA',
          'CDC',
          'ABA'
        ],{
          A: 'gtceu:lumium_screw',
          B: 'thermal:redstone_servo',
          C: '#gtceu:circuits/lv',
          D: 'gtceu:polyethylene_plate'
        })
        event.shaped(
          Item.of('storagenetwork:slow_upgrade', 1),[ 
            'ABA',
            'CDC',
            'ABA'
          ],{
            A: 'gtceu:andesite_alloy_screw',
            B: 'thermal:redstone_servo',
            C: '#gtceu:circuits/lv',
            D: 'gtceu:polyethylene_plate'
          })
          event.shaped(
            Item.of('storagenetwork:stock_upgrade', 1),[ 
              'ABA',
              'CDC',
              'ABA'
            ],{
              A: 'gtceu:bronze_crate',
              B: 'thermal:redstone_servo',
              C: '#gtceu:circuits/lv',
              D: 'gtceu:polyethylene_plate'
            })
            event.shaped(
              Item.of('storagenetwork:operation_upgrade', 1),[ 
                'ABA',
                'CDC',
                'ABA'
              ],{
                A: 'gtceu:blue_alloy_screw',
                B: 'thermal:redstone_servo',
                C: '#gtceu:circuits/lv',
                D: 'gtceu:polyethylene_plate'
              })
              event.shaped(
                Item.of('storagenetwork:slow_upgrade', 1),[ 
                  'ABA',
                  'CDC',
                  'ABA'
                ],{
                  A: 'gtceu:andesite_alloy_screw',
                  B: 'thermal:redstone_servo',
                  C: '#gtceu:circuits/lv',
                  D: 'gtceu:polyethylene_plate'
                })
                event.shaped(
                  Item.of('storagenetwork:single_upgrade', 1),[ 
                    'ABA',
                    'CDC',
                    'ABA'
                  ],{
                    A: 'gtceu:steel_screw',
                    B: 'thermal:redstone_servo',
                    C: '#gtceu:circuits/lv',
                    D: 'gtceu:polyethylene_plate'
                  })
              
      event.shaped(
    Item.of('storagenetwork:exchange', 1),[ 
      'AAA',
      'BCD',
      'EEE'
    ],{
      A: 'storagenetwork:import_kabel',
      B: 'gtceu:mv_input_bus',
      C: '#gtceu:circuits/mv',
      D: 'gtceu:mv_output_bus',
      E: 'storagenetwork:export_kabel'
    })

    event.shaped(
      Item.of('storagenetwork:collector', 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: 'gtceu:steel_plate',
        B: 'storagenetwork:import_kabel',
        C: 'gtceu:mv_input_bus'
      })
  
    event.shaped(
      Item.of('pipez:wrench', 1),[ 
        'ABA',
        ' A ',
        ' A '
      ],{
        A: 'gtceu:pewter_plate',
        B: '#forge:tools/hammers'
      })
    event.shaped(
      Item.of('pipez:filter_destination_tool', 1),[ 
        'AAA',
        'BCB',
        'ADA'
      ],{
        A: 'gtceu:steel_plate',
        B: 'gtceu:red_alloy_single_cable',
        C: 'gtceu:glass_plate',
        D: 'quark:iron_button'
      })

  event.shaped(
    Item.of('storagedrawers:controller_slave', 4),[ 
      'AAA',
      'BCD',
      'AAA'
    ],{
      A: 'gtceu:clean_machine_casing',
      B: 'gtceu:hv_output_bus',
      C: 'storagedrawers:compacting_drawers_3',
      D: 'gtceu:hv_input_bus'
    })
    event.shaped(
      Item.of('storagenetwork:request', 1),[ 
        'ABA',
        'CDC',
        'AEA'
      ],{
        A: 'gtceu:gold_gear',
        B: 'avaritia:compressed_crafting_table',
        C: '#gtceu:circuits/mv',
        D: 'storagenetwork:inventory',
        E: 'rftoolsbase:crafting_card'
      })
  
    event.shaped(
      Item.of('storagenetwork:inventory', 1),[ 
        'ABA',
        'CDC',
        'EBE'
      ],{
        A: 'gtceu:mv_conveyor_module',
        B: '#gtceu:circuits/hv',
        C: 'create:display_board',
        D: 'gtceu:mv_machine_hull',
        E: 'storagenetwork:storage_kabel'
      })

    event.shaped(
      Item.of('elementalcraft:small_container', 1),[ 
        'ABA',
        'BCB',
        'ABA'
      ],{
        A: 'elementalcraft:elementpipe_impaired',
        B: 'gtceu:glass_plate',
        C: 'elementalcraft:inert_crystal'
      })
      event.shaped(
        Item.of('storagedrawers:drawer_key', 1),[ 
          'CAD',
          ' A ',
          ' B '
        ],{
          A: 'gtceu:gold_rod',
          B: 'gtceu:gold_plate',
          C: '#forge:tools/files',
          D: '#forge:tools/saws'
        })
        event.shaped(
          Item.of('storagedrawers:quantify_key', 1),[ 
            ' A ',
            'CAD',
            ' B '
          ],{
            A: 'gtceu:gold_rod',
            B: 'gtceu:gold_plate',
            C: '#forge:tools/files',
            D: '#forge:tools/saws'
          })
          event.shaped(
          Item.of('storagedrawers:shroud_key', 1),[ 
            ' A ',
            ' A ',
            'CBD'
          ],{
            A: 'gtceu:gold_rod',
            B: 'gtceu:gold_plate',
            C: '#forge:tools/files',
            D: '#forge:tools/saws'
          })

      event.shaped(
        Item.of('storagedrawers:oak_trim', 4),[ 
          'ABA',
          'BCB',
          'ABA'
        ],{
          C: 'gtceu:treated_wood_frame',
          B: 'gtceu:treated_wood_planks',
          A: 'gtceu:treated_wood_plate'
        })
        event.shaped(
          Item.of('storagedrawers:compacting_drawers_3', 1),[ 
            'ABA',
            'BCB',
            'ABA'
          ],{
            C: 'gtceu:lv_packer',
            B: 'gtceu:steel_plate',
            A: 'gtceu:long_steel_rod'
          })
  
      event.shaped(
        Item.of('storagedrawers:obsidian_storage_upgrade', 1),[ 
          'AAA',
          'BCB',
          'AAA'
        ],{
          A: 'gtceu:iron_rod',
          B: 'gtceu:double_wrought_iron_plate',
          C: 'storagedrawers:upgrade_template'
        })
  
      event.shaped(
        Item.of('storagedrawers:iron_storage_upgrade', 1),[ 
          'AAA',
          'BCB',
          'AAA'
        ],{
          A: 'gtceu:wrought_iron_rod',
          B: 'gtceu:double_steel_plate',
          C: 'storagedrawers:obsidian_storage_upgrade'
        })

    event.shaped(
      Item.of('storagedrawers:oak_full_drawers_1', 1),[ 
        'AAA',
        'BCB',
        'AAA'
      ],{
        A: 'gtceu:treated_wood_planks',
        B: 'minecraft:barrel',
        C: 'gtceu:treated_wood_frame'
      })
      event.shaped(
        Item.of('storagedrawers:upgrade_template', 1),[ 
          'AAA',
          'ABA',
          'AAA'
        ],{
          A: 'gtceu:treated_wood_rod',
          B: 'storagedrawers:oak_full_drawers_1'
        })
  
    event.shaped(
      Item.of('ironchest:wood_to_copper_chest_upgrade', 1),[ 
        'AAA',
        'ABA',
        'AAA'
      ],{
        A: 'gtceu:bronze_plate',
        B: 'gtceu:treated_wood_frame'
      })
      event.shaped(
        Item.of('ironchest:wood_to_iron_chest_upgrade', 1),[ 
          'AAA',
          'ABA',
          'AAA'
        ],{
          A: 'gtceu:wrought_iron_plate',
          B: 'gtceu:treated_wood_frame'
        })
        event.shaped(
          Item.of('ironchest:copper_to_iron_chest_upgrade', 1),[ 
            'AAA',
            'ABA',
            'AAA'
          ],{
            B: 'gtceu:bronze_plate',
            A: 'gtceu:double_wrought_iron_plate'
          })
          event.shaped(
            Item.of('ironchest:iron_to_gold_chest_upgrade', 1),[ 
              'ABA',
              'BCB',
              'ABA'
            ],{
              A: 'gtceu:arcane_gold_plate',
              B: 'gtceu:electrum_plate',
              C: 'gtceu:double_wrought_iron_plate'
            })
            event.shaped(
              Item.of('ironchest:gold_to_diamond_chest_upgrade', 1),[ 
                'ABA',
                'BCB',
                'ABA'
              ],{
                A: 'gtceu:diamond_plate',
                B: 'gtceu:steel_plate',
                C: 'gtceu:double_electrum_plate'
              })
  
            event.shaped(
              Item.of('ironchest:diamond_to_crystal_chest_upgrade', 1),[ 
                'AAA',
                'ABA',
                'AAA'
              ],{
                A: 'gtceu:diamond_plate',
                B: 'minecraft:glass'
              })
              event.shaped(
                Item.of('ironchest:diamond_to_obsidian_chest_upgrade', 1),[ 
                  'AAA',
                  'ABA',
                  'AAA'
                ],{
                  A: 'gtceu:diamond_plate',
                  B: 'minecraft:obsidian'
                })
    
  
    event.shaped(
      Item.of("minecraft:lightning_rod", 1),[ 
        'ABC',
        ' D ',
        ' D '
      ],{
        A: '#forge:tools/files',
        B: 'minecraft:copper_ingot',
        C: '#forge:tools/hammers'
      })
  
  event.shaped(
    Item.of("pipez:basic_upgrade", 1),[ 
      'ABA', 
      'CDE',
      'AFA'
    ],{
      A: 'gtceu:signalum_plate',
      B: '#gtceu:circuits/mv',
      C: 'gtceu:mv_conveyor_module',
      D: 'gtceu:signalum_gear',
      E: 'gtceu:mv_electric_pump',
      F: 'gtceu:gold_quadruple_cable'
    })
    event.shaped(
      Item.of("pipez:improved_upgrade", 1),[ 
        'ABA', 
        'CDE',
        'AFA'
      ],{
        A: 'gtceu:lumium_plate',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:hv_conveyor_module',
        D: 'pipez:basic_upgrade',
        E: 'gtceu:hv_electric_pump',
        F: 'gtceu:aluminium_quadruple_cable'
      })
      event.shaped(
        Item.of("pipez:advanced_upgrade", 1),[ 
          'ABA', 
          'CDE',
          'AFA'
        ],{
          A: 'gtceu:enderium_plate',
          B: '#gtceu:circuits/ev',
          C: 'gtceu:ev_conveyor_module',
          D: 'pipez:improved_upgrade',
          E: 'gtceu:ev_electric_pump',
          F: 'gtceu:platinum_quadruple_cable'
        })
  
  event.shaped(
    Item.of("pipez:item_pipe", 4),[ 
      'AAA', 
      'BCD',
      'AAA'
    ],{
      A: 'gtceu:cupronickel_large_item_pipe',
      B: 'gtceu:lv_conveyor_module',
      C: 'thermal:redstone_servo',
      D: 'gtceu:item_filter'
    })
    event.shaped(
      Item.of("pipez:fluid_pipe", 4),[ 
        'AAA', 
        'BCD',
        'AAA'
      ],{
        A: 'gtceu:potin_large_fluid_pipe',
        B: 'gtceu:lv_electric_pump',
        C: 'thermal:redstone_servo',
        D: 'gtceu:fluid_filter'
      })
  
  event.shaped(
    Item.of("twilightforest:steeleaf_helmet", 1),[ 
      'AAA', 
      'ABA'
    ],{
      A: 'twilightforest:steeleaf_ingot',
      B: 'minecraft:iron_helmet'
    })
    event.shaped(
      Item.of("twilightforest:steeleaf_helmet", 1),[ 
        'AAA', 
        'ABA'
      ],{
        A: 'twilightforest:steeleaf_ingot',
        B: 'minecraft:iron_helmet'
      })
  
    event.shaped(
      Item.of("twilightforest:steeleaf_chestplate", 1),[ 
        'ABA', 
        'AAA',
        'AAA'
      ],{
        A: 'twilightforest:steeleaf_ingot',
        B: 'minecraft:iron_chestplate'
      })
      event.shaped(
        Item.of("twilightforest:steeleaf_leggings", 1),[ 
          'AAA', 
          'ABA',
          'A A'
        ],{
          A: 'twilightforest:steeleaf_ingot',
          B: 'minecraft:iron_leggings'
        })
        event.shaped(
          Item.of("twilightforest:steeleaf_boots", 1),[ 
            'A A', 
            'ABA'
          ],{
            A: 'twilightforest:steeleaf_ingot',
            B: 'minecraft:iron_boots'
          })
          event.shaped(
            Item.of("twilightforest:steeleaf_sword", 1),[ 
              ' A ', 
              'ABA',
              ' A '
            ],{
              A: 'twilightforest:steeleaf_ingot',
              B: 'minecraft:iron_sword'
            })
            event.shaped(
              Item.of("twilightforest:steeleaf_shovel", 1),[ 
                ' A ', 
                'ABA',
                ' A '
              ],{
                A: 'twilightforest:steeleaf_ingot',
                B: 'minecraft:iron_shovel'
              })
              event.shaped(
                Item.of("twilightforest:steeleaf_pickaxe", 1),[ 
                  ' A ', 
                  'ABA',
                  ' A '
                ],{
                  A: 'twilightforest:steeleaf_ingot',
                  B: 'minecraft:iron_pickaxe'
                })
                event.shaped(
                  Item.of("twilightforest:steeleaf_axe", 1),[ 
                    ' A ', 
                    'ABA',
                    ' A '
                  ],{
                    A: 'twilightforest:steeleaf_ingot',
                    B: 'minecraft:iron_axe'
                  })
                  event.shaped(
                    Item.of("twilightforest:steeleaf_hoe", 1),[ 
                      ' A ', 
                      'ABA',
                      ' A '
                    ],{
                      A: 'twilightforest:steeleaf_ingot',
                      B: 'minecraft:iron_hoe'
                    })
        
  event.shaped(
    Item.of("twilightforest:ironwood_helmet", 1),[ 
      'AAA', 
      'ABA'
    ],{
      A: 'gtceu:ironwood_plate',
      B: '#forge:tools/hammers'
    })
    event.shaped(
      Item.of("twilightforest:fiery_helmet", 1),[ 
        ' A ', 
        'ABA',
        ' A '
      ],{
        A: 'gtceu:fiery_plate',
        B: 'minecraft:diamond_helmet'
      })
      event.shaped(
        Item.of("twilightforest:fiery_chestplate", 1),[ 
          ' A ', 
          'ABA',
          ' A '
        ],{
          A: 'gtceu:fiery_plate',
          B: 'minecraft:diamond_chestplate'
        })
        event.shaped(
          Item.of("twilightforest:fiery_leggings", 1),[ 
            ' A ', 
            'ABA',
            ' A '
          ],{
            A: 'gtceu:fiery_plate',
            B: 'minecraft:diamond_leggings'
          })
          event.shaped(
            Item.of("twilightforest:fiery_boots", 1),[ 
              ' A ', 
              'ABA',
              ' A '
            ],{
              A: 'gtceu:fiery_plate',
              B: 'minecraft:diamond_boots'
            })
            event.shaped(
              Item.of("twilightforest:fiery_sword", 1),[ 
                ' A ', 
                'ABA',
                ' A '
              ],{
                A: 'gtceu:fiery_plate',
                B: 'minecraft:diamond_sword'
              })
              event.shaped(
                Item.of("twilightforest:fiery_pickaxe", 1),[ 
                  ' A ', 
                  'ABA',
                  ' A '
                ],{
                  A: 'gtceu:fiery_plate',
                  B: 'minecraft:diamond_pickaxe'
                })
                  
    event.shaped(
      Item.of("twilightforest:ironwood_chestplate", 1),[ 
        'ABA', 
        'AAA',
        'AAA'
      ],{
        A: 'gtceu:ironwood_plate',
        B: '#forge:tools/hammers'
      })
    event.shaped(
      Item.of("twilightforest:ironwood_leggings", 1),[ 
        'AAA', 
        'ABA',
        'A A'
      ],{
        A: 'gtceu:ironwood_plate',
        B: '#forge:tools/hammers'
      })
    event.shaped(
      Item.of("twilightforest:ironwood_boots", 1),[ 
        'A A', 
        'ABA'
      ],{
        A: 'gtceu:ironwood_plate',
        B: '#forge:tools/hammers'
      })
      event.shaped(
        Item.of("twilightforest:ironwood_chestplate", 1),[ 
          'ABA', 
          'AAA',
          'AAA'
        ],{
          A: 'gtceu:ironwood_plate',
          B: '#forge:tools/hammers'
        })
    event.shaped(
      Item.of("twilightforest:ironwood_sword", 1),[ 
        ' A ', 
        'BAC',
        ' D '
      ],{
        A: 'gtceu:ironwood_plate',
        B: '#forge:tools/hammers',
        C: '#forge:tools/files',
        D: 'minecraft:stick'
      })
      event.shaped(
        Item.of("twilightforest:ironwood_shovel", 1),[ 
          'BAC', 
          ' D ',
          ' D '
        ],{
          A: 'gtceu:ironwood_plate',
          B: '#forge:tools/hammers',
          C: '#forge:tools/files',
          D: 'minecraft:stick'
        })
        event.shaped(
          Item.of("twilightforest:ironwood_pickaxe", 1),[ 
            'AEE', 
            'BDC',
            ' D '
          ],{
            A: 'gtceu:ironwood_plate',
            B: '#forge:tools/hammers',
            C: '#forge:tools/files',
            D: 'minecraft:stick',
            E: '#forge:ingots/ironwood'
          })
          event.shaped(
            Item.of("twilightforest:ironwood_axe", 1),[ 
              'AEC', 
              'AD ',
              'BD '
            ],{
              A: 'gtceu:ironwood_plate',
              B: '#forge:tools/hammers',
              C: '#forge:tools/files',
              D: 'minecraft:stick',
              E: '#forge:ingots/ironwood'
            })
            event.shaped(
              Item.of("twilightforest:ironwood_hoe", 1),[ 
                'AEC', 
                'BD ',
                ' D '
              ],{
                A: 'gtceu:ironwood_plate',
                B: '#forge:tools/hammers',
                C: '#forge:tools/files',
                D: 'minecraft:stick',
                E: '#forge:ingots/ironwood'
              })
    
  event.shaped(
    Item.of("evilcraft:dark_spike", 4),[ 
      ' A ', 
      'BBB',
      ' A '
    ],{
      A: 'evilcraft:dark_gem',
      B: 'gtceu:dark_metal_rod'
    })
    event.shaped(
    Item.of("twilightforest:naga_chestplate", 1),[ 
      'ABA', 
      'AAA',
      'AAA'
    ],{
      A: 'twilightforest:naga_scale',
      B: 'minecraft:iron_chestplate'
    })
    event.shaped(
      Item.of("twilightforest:naga_leggings", 1),[ 
        'AAA', 
        'ABA',
        'A A'
      ],{
        A: 'twilightforest:naga_scale',
        B: 'minecraft:iron_leggings'
      })
  
    event.shaped(
      Item.of("evilcraft:dark_stick", 2),[ 
        ' B ', 
        ' A',
        ' A '
      ],{
        A: 'evilcraft:reinforced_undead_planks',
        B: 'evilcraft:dark_gem'
      })
  
  event.shaped(
    Item.of("eidolon:wicked_weave", 2),[ 
      'ABA', 
      'BCB',
      'ABA'
    ],{
      A: '#forge:dyes/blue',
      B: 'magistuarmory:woolen_fabric',
      C: 'eidolon:shadow_gem'
    })
    event.shaped(
      Item.of("eidolon:worktable", 1),[ 
        'AAA', 
        'BBB',
        'CCC'
      ],{
        A: 'eidolon:pewter_inlay',
        B: 'eidolon:wicked_weave',
        C: 'gtceu:treated_wood_planks'
      })
    event.shaped(
    Item.of("gtceu:mv_machine_hull", 1),[ 
      'ABA', 
      'CDC'
    ],{
      A: 'gtceu:bloodinum_plate',
      B: 'gtceu:aluminium_plate',
      C: 'gtceu:copper_single_cable',
      D: 'gtceu:mv_machine_casing'
    })
    event.shaped(
      Item.of("gtceu:hv_machine_hull", 1),[ 
        'ABA', 
        'CDC'
      ],{
        A: 'gtceu:ethylumium_plate',
        B: 'gtceu:stainless_steel_plate',
        C: 'gtceu:gold_single_cable',
        D: 'gtceu:hv_machine_casing'
      })
  
  
  event.shaped(
    Item.of("gtceu:lv_machine_hull", 1),[ 
      'ABA', 
      'CDC'
    ],{
      A: 'gtceu:dark_metal_plate',
      B: 'gtceu:steel_plate',
      C: 'gtceu:tin_single_cable',
      D: 'gtceu:lv_machine_casing'
    })
    event.shaped(
      Item.of("eidolon:pewter_inlay", 1),[ 
        ' A ', 
        'A A',
        ' A '
      ],{
        A: 'gtceu:pewter_ring'
      })
      event.shaped(
        Item.of("eidolon:gold_inlay", 1),[ 
          ' A ', 
          'A A',
          ' A '
        ],{
          A: 'gtceu:arcane_gold_ring'
        })
  
  event.shaped(
    Item.of("create:powered_latch", 1),[ 
      ' A ', 
      'BCB',
      'DDD'
    ],{
      A: 'create:electron_tube',
      B: 'gtceu:fine_red_alloy_wire',
      C: 'minecraft:lever',
      D: 'minecraft:stone_pressure_plate'
    })
    event.shaped(
      Item.of("create:white_seat", 1),[ 
        'AAA', 
        'BBB'
      ],{
        A: '#minecraft:wool',
        B: 'gtceu:treated_wood_planks'
      })
  
    event.shaped(
      Item.of("create:powered_toggle_latch", 1),[ 
        ' A ', 
        ' C ',
        'DDD'
      ],{
        A: 'create:electron_tube',
        C: 'minecraft:lever',
        D: 'minecraft:stone_pressure_plate'
      })
  
    event.shaped(
      Item.of("create:pulse_extender", 1),[ 
        'A A', 
        'BCB',
        'DDD'
      ],{
        A: 'create:electron_tube',
        B: 'gtceu:brass_plate',
        C: 'minecraft:repeater',
        D: 'minecraft:stone_pressure_plate'
      })
  
  event.shaped(
    Item.of("create:pulse_repeater", 1),[ 
      '  A', 
      'BCB',
      'DDD'
    ],{
      A: 'create:electron_tube',
      B: 'gtceu:brass_plate',
      C: 'minecraft:repeater',
      D: 'minecraft:stone_pressure_plate'
    })
  event.shaped(
    Item.of("create:display_link", 1),[ 
      'ABA', 
      'ACA',
      'DED'
    ],{
      A: 'create:electron_tube',
      B: 'create:redstone_link',
      C: 'create:brass_casing',
      D: 'minecraft:comparator',
      E: 'minecraft:observer'
    })
    event.shaped(
      Item.of("create:redstone_link", 1),[ 
        'ABA', 
        'CDC'
      ],{
        A: 'create:electron_tube',
        B: 'gtceu:andesite_alloy_rod',
        C: 'minecraft:redstone_torch',
        D: 'create:brass_casing'
      })
  
  event.shaped(
    Item.of("create:display_board", 1),[ 
      'ABA', 
      'ACA',
      'ABA'
    ],{
      A: 'gtceu:steel_plate',
      B: '#gtceu:circuits/lv',
      C: 'create:large_cogwheel'
    })

  event.shaped(
    Item.of("create:content_observer", 1),[ 
      'AAA', 
      'BCB',
      'BDB'
    ],{
      A: 'create:electron_tube',
      B: 'gtceu:fine_red_alloy_wire',
      C: 'minecraft:observer',
      D: 'create:brass_casing'
    })
    event.shaped(
      Item.of("create:stockpile_switch", 1),[ 
        'AAA', 
        'BCB',
        'DDD'
      ],{
        A: 'gtceu:red_alloy_foil',
        B: 'create:electron_tube',
        C: 'create:brass_casing',
        D: 'minecraft:comparator'
      })
  
  event.shaped(
    Item.of("create:mechanical_arm", 1),[ 
      'ABA', 
      'CDC',
      'EFE'
    ],{
      A: 'gtceu:brass_plate',
      B: 'gtceu:lv_robot_arm',
      C: '#gtceu:circuits/lv',
      D: 'create:precision_mechanism',
      E: 'gtceu:small_arcane_gold_gear',
      F: 'create:brass_casing'
    })
    event.shaped(
      Item.of("create:item_vault", 1),[ 
        'ABA', 
        'BCB',
        'ABA'
      ],{
        A: 'gtceu:iron_bolt',
        B: 'gtceu:iron_plate',
        C: 'minecraft:barrel'
      })
  
    event.shaped(
      Item.of("create:controls", 1),[ 
        'AAA', 
        'BCB',
        'DED'
      ],{
        A: 'create:analog_lever',
        B: 'gtceu:steel_plate',
        C: 'create:railway_casing',
        D: 'create:precision_mechanism',
        E: '#gtceu:circuits/lv'
      })
  
    event.shaped(
      Item.of("minecraft:barrel", 1),[ 
        'ABA', 
        'ACA',
        'ABA'
      ],{
        A: '#minecraft:logs',
        B: '#minecraft:wooden_slabs',
        C: 'minecraft:flint'
      })
  
  event.shaped(
    Item.of("create:rotation_speed_controller", 1),[ 
      'ABA', 
      'CDC',
      'EEE'
    ],{
      A: 'create:precision_mechanism',
      B: 'gtceu:arcane_gold_gear',
      C: 'create:shaft',
      D: 'create:brass_casing',
      E: '#gtceu:circuits/lv'
    })
    event.shaped(
      Item.of("create:mechanical_roller", 1),[ 
        'ABA', 
        'CDC',
        'EFE'
      ],{
        A: 'create:electron_tube',
        B: 'minecraft:iron_bars',
        C: 'create:cogwheel',
        D: 'create:andesite_casing',
        E: 'gtceu:andesite_alloy_plate',
        F: 'create:crushing_wheel'
      })
  
  event.shaped(
    Item.of("create:redstone_contact", 1),[ 
      'ABA', 
      'CDC',
      'EBE'
    ],{
      A: 'minecraft:redstone_torch',
      B: 'minecraft:stone_pressure_plate',
      C: 'gtceu:iron_plate',
      D: 'minecraft:observer',
      E: 'gtceu:fine_red_alloy_wire'
    })
    event.shaped(
      Item.of("create:mechanical_harvester", 1),[ 
        'ABA', 
        'CDC',
        'EBE'
      ],{
        A: 'create:electron_tube',
        B: 'gtceu:steel_scythe',
        C: 'create:cogwheel',
        D: 'create:andesite_casing',
        E :'gtceu:andesite_alloy_plate'
      })
      event.shaped(
        Item.of("create:mechanical_plough", 1),[ 
          'ABA', 
          'CDC',
          'EBE'
        ],{
          A: 'create:electron_tube',
          B: 'gtceu:steel_hoe',
          C: 'create:cogwheel',
          D: 'create:andesite_casing',
          E :'gtceu:andesite_alloy_plate'
        })
   
  event.shaped(
    Item.of("create:mechanical_saw", 1),[ 
      'ABA', 
      'CDC',
      'EFE'
    ],{
      A: 'create:electron_tube',
      B: 'thermal:saw_blade',
      C: 'create:cogwheel',
      D: 'gtceu:steel_gear',
      E: 'gtceu:andesite_alloy_plate',
      F :'create:andesite_casing'
    })
    event.shaped(
      Item.of("create:mechanical_drill", 1),[ 
        'ABA', 
        'CDC',
        'EFE'
      ],{
        A: 'create:electron_tube',
        B: 'thermal:drill_head',
        C: 'create:cogwheel',
        D: 'gtceu:steel_gear',
        E: 'gtceu:andesite_alloy_plate',
        F :'create:andesite_casing'
      })
  
    event.shaped(
      Item.of("create:controller_rail", 3),[ 
        'A A', 
        'ABA',
        'ACA'
      ],{
        A: 'gtceu:gold_rod',
        B: 'minecraft:stick',
        C: 'create:electron_tube'
      })
  
    event.shaped(
      Item.of("create:contraption_controls", 1),[ 
        'ABA', 
        'CDC',
        'EFE'
      ],{
        A: 'create:electron_tube',
        B: '#minecraft:buttons',
        C: 'gtceu:fine_red_alloy_wire',
        D: 'create:andesite_casing',
        E: 'minecraft:redstone',
        F: 'minecraft:repeater'
      })
  
    event.shaped(
      Item.of("create:sticker", 1),[ 
        'AAA', 
        'BCB',
        'DDD'
      ],{
        A: '#bookshelf:slime_balls',
        B: 'create:electron_tube',
        C: 'minecraft:sticky_piston',
        D: 'gtceu:andesite_alloy_plate'
      })
  
    event.shaped(
      Item.of("create:linear_chassis", 3),[ 
        'AAA', 
        'BBB',
        'AAA'
      ],{
        B: 'create:andesite_casing',
        A: 'gtceu:treated_wood_plate'
      })
      event.shaped(
        Item.of("create:radial_chassis", 3),[ 
          'ABA', 
          'ABA',
          'ABA'
        ],{
          B: 'create:andesite_casing',
          A: 'gtceu:treated_wood_plate'
        })
    
  
  event.shaped(
    Item.of("create:elevator_pulley", 1),[ 
      'ABA', 
      'CDC',
      'EFE'
    ],{
      A: 'create:electron_tube',
      B: 'create:rope_pulley',
      C: 'create:cogwheel',
      D: 'create:brass_casing',
      E: 'create:belt_connector',
      F: 'gtceu:steel_plate'
    })
    event.shaped(
      Item.of("create:cart_assembler", 1),[ 
        'ABA', 
        'C C',
        'C C'
      ],{
        A: 'create:electron_tube',
        B: 'create:mechanical_bearing',
        C: 'gtceu:steel_plate'
      })
  
    event.shaped(
      Item.of("create:rope_pulley", 1),[ 
        'ABA', 
        'CDC',
        'EEE'
      ],{
        A: 'create:cogwheel',
        B: 'create:andesite_casing',
        C: 'create:shaft',
        D: 'minecraft:lead',
        E: 'gtceu:titanium_plate'
      })
  
    event.shaped(
      Item.of("create:clockwork_bearing", 1),[ 
        ' A ', 
        'BCB',
        ' D '
      ],{
        A: 'minecraft:clock',
        B: 'create:electron_tube',
        C: 'create:brass_casing',
        D: 'create:mechanical_bearing'
      })  
  event.shaped(
    Item.of("create:gantry_carriage", 1),[ 
      'AAA', 
      'BCB',
      'DED'
    ],{
      A: 'gtceu:steel_plate',
      B: 'create:shaft',
      C: 'create:mechanical_bearing',
      D: 'create:cogwheel',
      E: 'create:gantry_shaft'
    })
    event.shaped(
      Item.of("create:gantry_shaft", 1),[ 
        ' A ', 
        'ABA',
        ' A '
      ],{
        A: 'gtceu:fine_red_alloy_wire',
        B: 'create:shaft'
      })
  
    event.shaped(
      Item.of("create:mechanical_piston", 1),[ 
        'ABA', 
        'CDC',
        'AEA'
      ],{
        A: 'create:cogwheel',
        B: 'minecraft:piston',
        C: 'create:electron_tube',
        D: 'create:andesite_casing',
        E: 'create:piston_extension_pole'
      })
  
    event.shaped(
      Item.of("create:item_drain", 1),[ 
        ' A ', 
        'BCB',
        ' D '
      ],{
        A: 'gtceu:fluid_detector_cover',
        B: 'create:fluid_pipe',
        C: 'create:copper_casing',
        D: 'gtceu:lv_electric_pump'
      })
  
    event.shaped(
      Item.of("create:portable_fluid_interface", 1),[ 
        'ABA', 
        'CDC',
        'EFE'
      ],{
        A: 'create:electron_tube',
        B: 'gtceu:andesite_alloy_rotor',
        C: 'create:fluid_pipe',
        D: 'create:copper_casing',
        E: 'minecraft:glass',
        F: 'gtceu:lv_electric_pump'
      })
      event.shaped(
        Item.of("create:portable_storage_interface", 1),[ 
          'ABA', 
          'CDC',
          'EFE'
        ],{
          A: 'create:electron_tube',
          B: 'gtceu:lv_conveyor_module',
          C: 'gtceu:fine_red_alloy_wire',
          D: 'create:copper_casing',
          E: 'gtceu:andesite_alloy_plate',
          F: 'create:chute'
        })
    
    event.shaped(
      Item.of("create:spout", 1),[ 
        'ABA', 
        'CDC',
        'EEE'
      ],{
        A: 'create:fluid_pipe',
        B: 'gtceu:andesite_alloy_rotor',
        C: 'create:electron_tube',
        D: 'create:copper_casing',
        E: 'minecraft:glass_pane'
      })
    event.shaped(
      Item.of("kubejs:nether_star_shell", 1),[ 
        'CAC', 
        'ABA',
        'CAC'
      ],{
        A: 'gtceu:amethyst_plate',
        B: 'gtceu:glass_gem',
        C: 'eidolon:enchanted_ash'
      })
      event.shaped(
        Item.of("gtceu:lv_item_magnet", 1),[ 
          'ABG', 
          'CDC',
          'EFE'
        ],{
          A: 'gtceu:azure_neodymium_rod',
          G: 'gtceu:scarlet_neodymium_rod',
          B: '#forge:tools/wrenches',
          C: 'gtceu:magnetic_steel_rod',
          D: '#gtceu:batteries/lv',
          E: 'gtceu:tin_single_cable',
          F: 'gtceu:steel_plate'
        })
        event.shaped(
          Item.of("gtceu:hv_item_magnet", 1),[ 
            'ABG', 
            'CDC',
            'EFE'
          ],{
            A: 'gtceu:azure_neodymium_rod',
            G: 'gtceu:scarlet_neodymium_rod',
            B: '#forge:tools/wrenches',
            C: 'gtceu:magnetic_neodymium_rod',
            D: '#gtceu:batteries/hv',
            E: 'gtceu:gold_single_cable',
            F: 'gtceu:stainless_steel_plate'
          })
  
  event.shaped(
    Item.of("create:fluid_valve", 1),[ 
      ' A ', 
      'BCB',
      ' A '
    ],{
      A: 'create:cogwheel',
      B: 'gtceu:copper_plate',
      C: 'create:fluid_pipe'
    })
    event.shaped(
      Item.of("create:hose_pulley", 1),[ 
        'ABA', 
        'CDC',
        'ABA'
      ],{
        A: 'create:belt_connector',
        B: 'gtceu:andesite_alloy_rotor',
        C: 'create:fluid_pipe',
        D: 'create:copper_casing'
      })
  
  event.shaped(
    Item.of("create:smart_fluid_pipe", 1),[ 
      'ABA', 
      'CDC',
      'ABA'
    ],{
      A: 'gtceu:brass_plate',
      B: 'create:electron_tube',
      C: 'gtceu:fluid_filter',
      D: 'create:fluid_pipe'
    })
    event.shaped(
      Item.of("create:speedometer", 1),[ 
        'ABA', 
        'CDC',
        'EEE'
      ],{
        A: 'create:electron_tube',
        B: 'minecraft:observer',
        C: 'create:shaft',
        D: 'create:andesite_casing',
        E: 'minecraft:glass_pane'
      })
  
  event.shaped(
    Item.of("create:smart_chute", 1),[ 
      'ABA', 
      'CDC',
      'EEE'
    ],{
      A: 'gtceu:arcane_gold_plate',
      B: 'gtceu:brass_plate',
      C: 'gtceu:fine_red_alloy_wire',
      D: 'create:chute',
      E: 'create:electron_tube'
    })

  event.shaped(
    Item.of("create:weighted_ejector", 1),[ 
      'ABA', 
      'CDC',
      'EEE'
    ],{
      A: 'gtceu:gold_plate',
      B: 'create:electron_tube',
      C: 'create:cogwheel',
      D: 'create:depot',
      E: 'gtceu:andesite_alloy_spring'
    })

  event.shaped(
    Item.of("create:depot", 1),[ 
      'ABA', 
      'CCC',
      'ADA'
    ],{
      A: 'gtceu:treated_wood_plate',
      B: 'minecraft:item_frame',
      C: 'gtceu:andesite_alloy_plate',
      D: 'create:andesite_casing'
    })
    event.shaped(
      Item.of("create:adjustable_chain_gearshift", 1),[ 
        'ABA', 
        'CDC',
        'ABA'
      ],{
        A: 'create:cogwheel',
        B: 'gtceu:fine_red_alloy_wire',
        C: 'create:electron_tube',
        D: 'create:encased_chain_drive'
      })
  
    event.shaped(
      Item.of("create:encased_chain_drive", 1),[ 
        'ABA', 
        'CDC',
        'ABA'
      ],{
        A: 'create:cogwheel',
        B: 'gtceu:rubber_plate',
        C: 'create:shaft',
        D: 'create:andesite_casing'
      })
  
  event.shaped(
    Item.of("magistuarmory:woolen_fabric", 2),[ 
      'AAA', 
      'BBB',
      'AAA'
    ],{
      A: 'minecraft:string',
      B: '#minecraft:wool'
    })
    event.shaped(
      Item.of("create:gearshift", 1),[ 
        'ABA', 
        'CDC',
        'ABA'
      ],{
        A: 'gtceu:red_alloy_foil',
        B: 'create:shaft',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
      })
  
    event.shaped(
      Item.of("create:clutch", 1),[ 
        'ABC', 
        'BDB',
        'CBA'
      ],{
        A: 'create:cogwheel',
        B: 'gtceu:fine_red_alloy_wire',
        C: 'create:shaft',
        D: 'create:andesite_casing'
      })
  
    event.shaped(
      Item.of("create:gearbox", 2),[ 
        'ABA', 
        'BCB',
        'ABA'
      ],{
        A: 'create:shaft',
        B: 'create:cogwheel',
        C: 'create:andesite_casing'
      })
  
    event.shaped(
      Item.of("thirst:clay_bowl", 1),[ 
        'A A', 
        ' A '
      ],{
        A: 'minecraft:clay_ball',
      })
  
    event.shaped(
      Item.of("create:white_sail", 1),[ 
        'AAA', 
        'ABA',
        'AAA'
      ],{
        A: 'gtceu:treated_wood_rod',
        B: '#minecraft:wool'
      })
  
  event.shaped(
    Item.of("ceramicbucket:unfired_clay_bucket", 1),[ 
      'A A', 
      'A A',
      ' A '
    ],{
      A: 'gtceu:clay_dust'
    })
    event.shaped(
      Item.of("magistuarmory:hilt", 1),[ 
        ' A ', 
        'BBB',
        ' C '
      ],{
        A: '#forge:tools/mallets',
        B: 'magistuarmory:leather_strip',
        C: 'minecraft:stick'
      })
      event.shaped(
        Item.of("gtceu:lp_steam_solid_boiler", 1),[ 
          'AAA', 
          'BCB',
          'DED'
        ],{
          A: 'gtceu:bronze_plate',
          B: 'gtceu:arcane_gold_plate',
          C: 'kubejs:steam_chip',
          D: 'minecraft:bricks',
          E: 'minecraft:furnace'
        })
        event.shaped(
          Item.of("gtceu:hp_steam_solid_boiler", 1),[ 
            'AAA', 
            'BCB',
            'DED'
          ],{
            A: 'gtceu:steel_plate',
            B:'gtceu:arcane_gold_plate',
            C: 'kubejs:steam_chip',
            D: 'minecraft:bricks',
            E: 'minecraft:furnace'
          })
  
  event.shaped(
    Item.of('thermal:redstone_servo', 1),[ 
      'ABA', 
      ' C ',
      'ABA'  
    ],{
      A: 'gtceu:red_alloy_screw', 
      B: 'gtceu:iron_ring',
      C: '#gtceu:circuits/ulv'
    })
    event.shaped(
      Item.of('create:sequenced_gearshift', 1),[ 
        'ACA', 
        'BDE',
        'ACA'  
      ],{
        A: 'create:electron_tube', 
        B: '#forge:tools/screwdrivers',
        C: 'create:cogwheel',
        D: 'create:brass_casing',
        E: '#forge:tools/wrenches'
      })
  
    event.shaped(
      Item.of('create:chute', 2),[ 
        ' A ', 
        'ABA',
        ' A '  
      ],{
        A: 'gtceu:iron_plate', 
        B: 'minecraft:hopper',
      })
  
    event.shaped(
      Item.of('thermal:flux_drill', 1),[ 
        ' A ', 
        'BCB',
        'DED'  
      ],{
        A: 'thermal:drill_head', 
        B: 'gtceu:steel_plate',
        C: 'gtceu:stainless_steel_gear',
        D: 'thermal:rf_coil',
        E: '#gtceu:batteries/hv'
      })
     event.shaped(
      Item.of('thermal:flux_saw', 1),[ 
        ' A ', 
        'BCB',
        'DED'  
      ],{
        A: 'thermal:saw_blade', 
        B: 'gtceu:steel_plate',
        C: 'gtceu:stainless_steel_gear',
        D: 'thermal:rf_coil',
        E: '#gtceu:batteries/hv'
      })
      event.shaped(
        Item.of('thermal:flux_magnet', 1),[ 
          'ABA', 
          'CEC',
          'DDD'  
        ],{
          A: 'gtceu:scarlet_neodymium_ingot', 
          B: '#forge:tools/wrenches',
          C: '#gtceu:batteries/mv',
          D: 'thermal:rf_coil',
          E: 'gtceu:steel_plate'
        })
      event.shaped(
        Item.of('thermal:fluid_reservoir', 1),[ 
          'ABA', 
          'CDC',
          'CEC'  
        ],{
          A: 'gtceu:bronze_plate', 
          B: 'gtceu:rubber_plate',
          C: 'thermal:obsidian_glass',
          D: 'thermal:fluid_cell',
          E: 'thermal:redstone_servo'
        })

    event.shaped(
      Item.of('thermal:saw_blade', 1),[ 
        'BCB', 
        'BBB',
        'BBB'  
      ],{
        B: 'gtceu:steel_plate', 
        C: '#forge:tools/hammers'
      })
  
    event.shaped(
      Item.of('thermal:rf_coil', 1),[ 
        ' AB', 
        'ACA',
        'BA '  
      ],{
        A: 'gtceu:fine_red_alloy_wire', 
        B: 'gtceu:gold_ring',
        C: 'gtceu:long_gold_rod'
      })
  event.shaped(
    Item.of('create:mechanical_press', 1),[ 
      'AFA', 
      'CDC',
      'BEB'  
    ],{
      A: 'create:electron_tube', 
      B: 'create:shaft',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'minecraft:anvil',
      F: 'minecraft:piston'
    })

  event.shaped(
    Item.of('create:mechanical_mixer', 1),[ 
      'AFA', 
      'CDC',
      'BEB'  
    ],{
      A: 'create:electron_tube', 
      B: 'create:shaft',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'create:whisk',
      F: 'minecraft:piston'

    })
    event.shaped(
      Item.of('create:water_wheel', 1),[ 
        'ABA', 
        'CDC',
        'EAE'  
      ],{
        A: 'create:shaft', 
        B: 'create:electron_tube',
        C: 'gtceu:andesite_alloy_rotor',
        D: 'create:andesite_casing',
        E: 'create:cogwheel'
      })
      event.shaped(
        Item.of('create:large_water_wheel', 1),[ 
          'ABA', 
          'BCB',
          'ABA'  
        ],{
          A: 'create:water_wheel',
          B: 'create:shaft',
          C: 'create:andesite_casing'
        })
  
    event.shaped(
      Item.of('create:deployer', 1),[ 
        'ABC', 
        'DED',
        'FGH'  
      ],{
        A: '#forge:tools/saws', 
        B: 'create:andesite_casing',
        C: '#forge:tools/wrenches',
        D: 'create:electron_tube',
        E: 'create:piston_extension_pole',
        F: '#forge:tools/hammers',
        G: 'create:brass_hand',
        H: '#forge:tools/screwdrivers'
      })
    event.shaped(
      Item.of('create:brass_hand', 1),[ 
        'AAA', 
        'BCB',
        'DBE'  
      ],{
        A: 'eidolon:soul_shard', 
        B: 'gtceu:brass_plate',
        C: 'gtceu:arcane_gold_plate',
        D: '#forge:tools/files',
        E: '#forge:tools/wrenches'
      })
  event.shaped(
    Item.of('create:piston_extension_pole', 1),[ 
      'A B', 
      'CDC',
      'CDC'  
    ],{
      A: '#forge:tools/hammers', 
      B: '#forge:tools/saws',
      C: 'gtceu:treated_wood_plate',
      D: 'create:shaft'
    })
    event.shaped(
      Item.of('create:whisk', 1),[ 
        'ABC', 
        'DDD',
        ' D '  
      ],{
        A: '#forge:tools/hammers', 
        B: 'create:piston_extension_pole',
        C: '#forge:tools/files',
        D: 'gtceu:iron_plate'
      })
    event.shaped(
      Item.of('create:electron_tube', 1),[ 
        'AB ', 
        ' C ',
        ' D '  
      ],{
        A: '#forge:tools/hammers', 
        B: 'create:polished_rose_quartz',
        C: 'gtceu:sticky_resin',
        D: '#gtceu:circuits/ulv'
      })
    event.shaped(
      Item.of('create:mechanical_pump', 1),[ 
        'ABA', 
        'CDC',
        'ABA'  
      ],{
        A: 'create:cogwheel', 
        B: 'gtceu:andesite_alloy_rotor',
        C: 'gtceu:copper_plate',
        D: 'create:fluid_pipe'
      })
      event.shaped(
        Item.of('create:brass_casing', 1),[ 
          'BAB', 
          'DCD',
          'BAB'  
        ],{
          A: 'gtceu:brass_plate', 
          B: 'gtceu:treated_wood_plate',
          C: '#forge:tools/wrenches',
          D: 'gtceu:arcane_gold_plate'
        })
  event.shaped(
    Item.of('create:andesite_casing', 1),[ 
      'ABA', 
      'BCB',
      'ABA'  
    ],{
      B: 'gtceu:andesite_alloy_plate', 
      A: 'gtceu:treated_wood_plate',
      C: '#forge:tools/wrenches'
    })
    event.shaped(
      Item.of('create:copper_casing', 1),[ 
        'ABA', 
        'BCB',
        'ABA'  
      ],{
        B: 'gtceu:copper_plate', 
        A: 'gtceu:treated_wood_plate',
        C: '#forge:tools/wrenches'
      })
  
    event.shaped(
      Item.of('create:windmill_bearing', 1),[ 
        'ABA', 
        'CDC',
        'AEA'  
      ],{
        A: 'create:electron_tube', 
        B: '#bookshelf:slime_balls',
        C: 'gtceu:steel_plate',
        D: 'create:brass_casing',
        E: 'create:large_cogwheel'
      })
  
  event.shaped('2x magistuarmory:leather_strip', ['HI'], {
    H: 'kubejs:finished_leather',
    I: 'minecraft:shears'
  }).damageIngredient('minecraft:shears', 1)
  event.shaped(
    Item.of('create:empty_blaze_burner', 1), // 输出 输出量
    [ 
      'ACA', 
      'ABA', // 配方样子 用代号写
      'DDD'  
    ],
    {
      A: 'minecraft:iron_bars', 
      B: 'minecraft:netherrack',
      C: '#forge:tools/hammers',
      D: 'gtceu:steel_plate'  //代号指定
    }
  )
  event.shaped(
    Item.of('create:basin', 1), // 输出 输出量
    [ 
      'A A', 
      'ACA', // 配方样子 用代号写
      'AAA'  
    ],
    {
      A: 'gtceu:andesite_alloy_plate', 
      C: '#forge:tools/hammers'
    }
  )
  event.shaped(
    Item.of('kubejs:magic_board_v1', 1), // 输出 输出量
    [ 
      'AAA', 
      'BCD', // 配方样子 用代号写
      'AAA'  
    ],
    {
      A: 'gtceu:pewter_foil',
      B:"gtceu:clay_dust", 
      C: 'kubejs:petal_dust',
      D:'gtceu:flint_dust'
    }
  )

  event.shaped(
    Item.of('eidolon:crucible', 1), // 输出 输出量
    [ 
      'ACA', 
      'ABA', // 配方样子 用代号写
      'AAA'  
    ],
    {
      A: 'gtceu:pewter_foil', 
      B: 'minecraft:cauldron',
      C: '#forge:tools/hammers'  //代号指定
    }
  )

  event.shaped(
    Item.of('eidolon:brazier', 1), // 输出 输出量
    [ 
      'AAA', 
      ' B ', // 配方样子 用代号写
      'C C'  
    ],
    {
      A: 'gtceu:pewter_plate', 
      B: 'minecraft:campfire',
      C: 'gtceu:treated_wood_rod'  //代号指定
    }
  )

      event.shaped(
        Item.of('gtceu:compressed_coke_clay', 2),[ 
          'AAA', 
          'DBD',
          'CCC'],{
          A: 'minecraft:clay_ball', 
          B: 'gtceu:brick_wooden_form',
          C: '#minecraft:sand',
          D: 'gtceu:small_flint_dust'
        }).replaceIngredient('gtceu:brick_wooden_form', 'gtceu:brick_wooden_form')
        event.shaped(
          Item.of('gtceu:compressed_clay', 1),[ 
            'ABA'
            ],{
            A: 'minecraft:clay_ball', 
            B: 'gtceu:brick_wooden_form'}).replaceIngredient('gtceu:brick_wooden_form', 'gtceu:brick_wooden_form')
        event.shaped(
          Item.of('minecraft:paper', 2),[ 
            ' A ',
            'CCC',
            ' B '
            ],{
            A: '#forge:tools/mallets',
            C:'gtceu:paper_dust', 
            B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT()})
            .replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(), 'ceramicbucket:ceramic_bucket')
  
      event.shaped(
        Item.of('minecraft:bricks', 1),[ 
          'AAA', 
          'ABA',
          'AAA'],{
          A: 'minecraft:brick', 
          B: 'minecraft:water_bucket'}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
          event.shaped(
            Item.of('gtceu:wood_plate', 1),[  
              'BC ',
              'AAA'],{
              A: 'gtceu:wood_dust', 
              B: 'minecraft:water_bucket',
              C: '#forge:tools/hammers'
            }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
            event.shaped(
              Item.of('gtceu:wood_plate', 1),[  
                'BC ',
                'AAA'],{
                A: 'gtceu:wood_dust', 
                B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
                C: '#forge:tools/hammers'
              }).replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(), 'ceramicbucket:ceramic_bucket')
              event.shaped(
                Item.of('gtceu:stone_plate', 1),[  
                  'BC ',
                  'AAA'],{
                  A: 'gtceu:stone_dust', 
                  B: 'minecraft:water_bucket',
                  C: '#forge:tools/hammers'
                }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
                event.shaped(
                  Item.of('gtceu:stone_plate', 1),[  
                    'BC ',
                    'AAA'],{
                    A: 'gtceu:stone_dust', 
                    B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(),
                    C: '#forge:tools/hammers'
                  }).replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(), 'ceramicbucket:ceramic_bucket')
    
      event.shaped(
        Item.of('minecraft:bricks', 1),[ 
          'AAA', 
          'ABA',
          'AAA'],{
          A: 'minecraft:brick', 
          B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT()})
          .replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(), 'ceramicbucket:ceramic_bucket')
          event.shaped(
            Item.of('gtceu:treated_wood_planks', 6),[ 
              'AAA', 
              ' B ',
              'AAA'],{
              A: '#minecraft:planks', 
              B: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').weakNBT()})
              .replaceIngredient(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(), 'ceramicbucket:ceramic_bucket')
              event.shaped(
                Item.of('gtceu:treated_wood_planks', 6),[ 
                  'AAA', 
                  ' B ',
                  'AAA'],{
                  A: '#minecraft:planks', 
                  B: 'gtceu:creosote_bucket'}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
      event.shaped(
        Item.of("gtceu:steel_brick_casing", 1),[ 
          'AAA', 
          'BCB',
          'DDD'],{
          A: 'gtceu:steel_plate', 
          B: 'gtceu:arcane_gold_plate',
          C: '#forge:tools/hammers',
          D: 'minecraft:bricks'
        })
      event.shaped(
        Item.of("gtceu:lp_steam_liquid_boiler", 1),[ 
          'AAA', 
          'BCB',
          'ADA'],{
          A: 'gtceu:bronze_plate', 
          B: 'kubejs:steam_chip',
          C: 'minecraft:glass',
          D: 'gtceu:bronze_brick_casing'
        })
        event.shaped(
          Item.of("gtceu:hp_steam_liquid_boiler", 1),[ 
            'AAA', 
            'BCB',
            'ADA'],{
            A: 'gtceu:steel_plate', 
            B: 'kubejs:steam_chip',
            C: 'minecraft:glass',
            D: 'gtceu:steel_brick_casing'
          })
  
      event.shaped(
        Item.of("gtceu:bronze_brick_casing", 1),[ 
          'AAA', 
          'BCB',
          'DDD'],{
          A: 'gtceu:bronze_plate', 
          B: 'gtceu:arcane_gold_plate',
          C: '#forge:tools/hammers',
          D: 'minecraft:bricks'
        })
        event.shaped(
          Item.of("gtceu:bronze_machine_casing", 1),[ 
            'AAA', 
            'BCB',
            'AAA'],{
            A: 'gtceu:bronze_plate', 
            B: 'gtceu:arcane_gold_plate',
            C: '#forge:tools/hammers',
          })
  
  event.shapeless(
    Item.of('minecraft:flint',1),
    ['3x minecraft:gravel']
    )    
    event.shaped(
        Item.of('minecraft:campfire', 1), // 输出 输出量
        [ 
          'ABA', 
          'BAB', // 配方样子 用代号写
          'CCC'  
        ],
        {
          A: 'minecraft:flint', 
          B: 'minecraft:stick',
          C: '#minecraft:logs'  //代号指定
        }
      )
      event.shaped(
        Item.of('minecraft:furnace', 1), // 输出 输出量
        [ 
          'AAA', 
          'ABA', // 配方样子 用代号写
          'ACA'  
        ],
        {
          A: '#forge:cobblestone', 
          B: 'minecraft:flint',
          C: 'minecraft:campfire'  //代号指定
        }
      )
      event.shaped(
        Item.of('minecraft:blast_furnace', 1), // 输出 输出量
        [ 
          'AAA', 
          'BCB', // 配方样子 用代号写
          'DDD'  
        ],
        {
          A: 'gtceu:iron_plate', 
          B: 'gtceu:iron_gear',
          C: 'minecraft:furnace',
          D: '#forge:cobblestone'  //代号指定
        }
      )

      event.shaped(
        Item.of('nethersdelight:blackstone_furnace', 1), // 输出 输出量
        [ 
          'AAA', 
          'ABA', // 配方样子 用代号写
          'ACA'  
        ],
        {
          A: 'minecraft:blackstone', 
          B: 'minecraft:flint',
          C: 'minecraft:campfire'  //代号指定
        }
      )

      event.shaped(
        Item.of('nethersdelight:blackstone_blast_furnace', 1), // 输出 输出量
        [ 
          'AAA', 
          'BCB', // 配方样子 用代号写
          'DDD'  
        ],
        {
          A: 'gtceu:steel_plate', 
          B: 'gtceu:steel_gear',
          C: 'nethersdelight:blackstone_furnace',
          D: 'minecraft:blackstone'  //代号指定
        }
      )
      event.shaped(
        Item.of('minecraft:bucket', 1), // 输出 输出量
        [ 
          'A A', 
          'ABA', // 配方样子 用代号写
          'CAC'  
        ],
        {
          A: 'gtceu:iron_plate', 
          B: '#forge:tools/hammers',
          C: 'gtceu:iron_screw'
        }
      )
    event.shaped(
      Item.of('gtceu:pump_deck', 1), // 输出 输出量
      [ 
        'ABA', 
        'CEC', // 配方样子 用代号写
        'DDD'  
      ],
      {
        B: '#forge:tools/hammers', 
        A: 'gtceu:iron_screw',
        C: 'gtceu:treated_wood_planks',
        D: 'minecraft:cobblestone_slab',
        E: 'gtceu:treated_wood_frame'  //代号指定
      }
    )
    event.shaped(
      Item.of('gtceu:pump_hatch', 1), // 输出 输出量
      [ 
        'ABA', 
        'CDC', // 配方样子 用代号写
        'EEE'  
      ],
      {
        A: 'gtceu:iron_screw',
        B: '#forge:tools/hammers',
        C: 'gtceu:treated_wood_large_fluid_pipe',
        D: '#forge:tools/screwdrivers',
        E: 'gtceu:pump_deck',
      }
    )
    event.shaped(
      Item.of('gtceu:primitive_pump', 1), // 输出 输出量
      [ 
        'ABC', 
        'DED', // 配方样子 用代号写
        'FFF'  
      ],
      {
        A: '#forge:tools/screwdrivers',
        B: '#forge:tools/hammers',
        C: '#forge:tools/wrenches',
        D: 'gtceu:iron_rotor',
        E: 'gtceu:treated_wood_large_fluid_pipe',
        F: 'gtceu:pump_deck'
      }
    )
    event.shaped(
      Item.of('ultimine_addition:miner_certificate', 1), // 输出 输出量
      [ 
        ' a ', 
        'bcb', // 配方样子 用代号写
        ' d '  
      ],
      {
        a: 'gtceu:hv_miner',
        b: 'gtceu:lv_miner',
        c: 'ars_nouveau:blank_parchment',
        d: 'gtceu:mv_miner',
      }
    )
   event.blasting('eidolon:pewter_ingot','eidolon:pewter_blend')

   event.blasting('eidolon:enchanted_ash','kubejs:mystical_bone')
   event.smelting('twilightforest:ironwood_ingot','twilightforest:raw_ironwood')
   event.blasting('twilightforest:ironwood_ingot','twilightforest:raw_ironwood')
   event.blasting('gtceu:small_quicklime_dust','gtceu:stone_dust')
   event.blasting('gtceu:small_quicklime_dust','minecraft:nautilus_shell')

})

ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": {
          "item": "gtceu:glass_dust"
        },
        "loss_rate": 80,
        "results": [
          {
            "item": "gtceu:glass_gem"
          }
        ]
      })
    event.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": {
          "tag": "forge:ingots/iron"
        },
        "loss_rate": 80,
        "results": [
          {
            "item": "pneumaticcraft:ingot_iron_compressed"
          }
        ]
      })
})
let ingot =['copper','tin','iron','bronze','gold','zinc','brass','nickel','lead','andesite_alloy']

ServerEvents.recipes(e => {
	e.recipes.create.sequenced_assembly([
		Item.of('gtceu:basic_electronic_circuit').withChance(200.0),
		Item.of('gtceu:vacuum_tube').withChance(8.0),
		Item.of('gtceu:red_alloy_quadruple_cable').withChance(8.0),
		Item.of('gtceu:resistor').withChance(8.0),
	], 'gtceu:resin_printed_circuit_board', [
        e.recipes.createFilling('gtceu:resin_printed_circuit_board', [
            'gtceu:resin_printed_circuit_board',
            Fluid.of('gtceu:tin', 144)
          ]),      
		e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:vacuum_tube']),
        e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:vacuum_tube']),
		e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:resistor']),
		e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:resistor']),
		e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:red_alloy_quadruple_cable']),
		e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:steel_plate'])
	]).transitionalItem('gtceu:resin_printed_circuit_board').loops(1)
	e.recipes.create.sequenced_assembly([
		Item.of('gtceu:good_electronic_circuit').withChance(200.0),
		Item.of('gtceu:basic_electronic_circuit').withChance(8.0),
		Item.of('gtceu:copper_quadruple_wire').withChance(8.0),
		Item.of('gtceu:diode').withChance(8.0),
	], 'gtceu:phenolic_printed_circuit_board', [
        e.recipes.createFilling('gtceu:phenolic_printed_circuit_board', [
            'gtceu:phenolic_printed_circuit_board',
            Fluid.of('gtceu:tin', 48)
          ]),      
		e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:basic_electronic_circuit']),
		e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:diode']),
		e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:copper_single_wire']),
		e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:steel_plate'])
	]).transitionalItem('gtceu:phenolic_printed_circuit_board').loops(3)
	e.recipes.create.sequenced_assembly([
		Item.of('avaritia:compressed_crafting_table').withChance(240.0),
	], 'minecraft:crafting_table', [     
		e.recipes.createDeploying('minecraft:crafting_table', ['minecraft:crafting_table', 'minecraft:crafting_table']),
		e.recipes.createPressing('minecraft:crafting_table','minecraft:crafting_table')
	]).transitionalItem('minecraft:crafting_table').loops(26)
	e.recipes.create.sequenced_assembly([
		Item.of('avaritia:double_compressed_crafting_table').withChance(240.0),
	], 'avaritia:compressed_crafting_table', [     
		e.recipes.createDeploying('avaritia:compressed_crafting_table', ['avaritia:compressed_crafting_table', 'avaritia:compressed_crafting_table']),
		e.recipes.createPressing('avaritia:compressed_crafting_table','avaritia:compressed_crafting_table')
	]).transitionalItem('avaritia:compressed_crafting_table').loops(26)
	e.recipes.create.sequenced_assembly([
		Item.of('torchmaster').withChance(240.0),
	], 'minecraft:torch', [     
		e.recipes.createDeploying('minecraft:torch', ['minecraft:torch', 'minecraft:torch']),
		e.recipes.createDeploying('minecraft:torch', ['minecraft:torch', 'minecraft:glowstone_dust']),
		e.recipes.createDeploying('minecraft:torch', ['minecraft:torch', 'gtceu:small_diamond_dust']),
		e.recipes.createDeploying('minecraft:torch', ['minecraft:torch', 'gtceu:small_gold_dust']),
		e.recipes.createPressing('minecraft:torch','minecraft:torch')
	]).transitionalItem('minecraft:crafting_table').loops(16)

	e.recipes.create.sequenced_assembly([
		Item.of('create:track').withChance(240.0),
	], 'minecraft:smooth_stone_slab', [     
		e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:long_iron_rod']),
        e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:long_iron_rod']),
		e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:long_iron_rod']),
		e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:treated_wood_rod']),
		e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:treated_wood_rod']),
		e.recipes.createPressing('create:incomplete_track','create:incomplete_track')
	]).transitionalItem('create:incomplete_track').loops(1)
	e.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(240.0),
	], 'gtceu:arcane_gold_plate', [     
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:brass_screw']),
		e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:small_arcane_gold_gear'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5)

	for(let i of ingot) {
    e.recipes.create.mixing(Fluid.of(`gtceu:${i}`, 144), `2x gtceu:${i}_dust`).heated()
	e.recipes.create.compacting(`gtceu:${i}_block`, `12x gtceu:${i}_ingot`)
	e.recipes.create.compacting(`minecraft:${i}_block`, `12x minecraft:${i}_ingot`)
	e.recipes.create.pressing(`gtceu:${i}_plate`, `gtceu:${i}_ingot`)
	e.recipes.create.pressing(`gtceu:${i}_plate`, `minecraft:${i}_ingot`)
	e.recipes.create.crushing(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)
	e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)

}
e.recipes.create.crushing('gtceu:flint_dust', 'minecraft:flint')
e.recipes.create.crushing('gtceu:quartz_sand_dust', '#minecraft:sand')
e.recipes.create.crushing('gtceu:clay_dust', 'minecraft:clay_ball')
e.recipes.create.crushing('gtceu:brick_dust', 'minecraft:brick')
e.recipes.create.crushing('create:cinder_flour', 'minecraft:red_nether_bricks')
e.custom(
	{
		"type": "create:item_application",
		"ingredients": [
		  {
			"item": "create:shaft"
		  },
		  {
			"item": "gtceu:andesite_alloy_gear"
		  }
		],
		"results": [
		  {
			"item": "create:large_cogwheel"
		  }
		]
	  }
)
e.custom(
	{
		"type": "create:item_application",
		"ingredients": [
		  {
			"item": "create:shaft"
		  },
		  {
			"item": "gtceu:small_andesite_alloy_gear"
		  }
		],
		"results": [
		  {
			"item": "create:cogwheel"
		  }
		]
	  }
)

	e.recipes.create.mixing(Fluid.of('gtceu:redstone', 144), '2x minecraft:redstone').heated()
	e.recipes.create.mechanical_crafting('gtceu:lv_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:lv_emitter',
		B:'create:spout',
		C:'create:deployer',
		D:'#gtceu:circuits/mv',
		E:'gtceu:tin_single_cable',
		F:'gtceu:lv_assembler',
		G:'create:belt_connector',
		I:'gtceu:lv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:mv_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:mv_emitter',
		B:'gtceu:mv_electric_pump',
		C:'gtceu:mv_robot_arm',
		D:'#gtceu:circuits/mv',
		E:'gtceu:copper_single_cable',
		F:'gtceu:mv_assembler',
		G:'gtceu:mv_electric_motor',
		I:'gtceu:mv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:hv_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:hv_emitter',
		B:'gtceu:hv_electric_pump',
		C:'gtceu:hv_robot_arm',
		D:'#gtceu:circuits/ev',
		E:'gtceu:gold_quadruple_cable',
		F:'gtceu:hv_assembler',
		G:'gtceu:hv_electric_motor',
		I:'gtceu:hv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:ev_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:ev_emitter',
		B:'gtceu:ev_electric_pump',
		C:'gtceu:ev_robot_arm',
		D:'#gtceu:circuits/iv',
		E:'gtceu:aluminium_quadruple_cable',
		F:'gtceu:ev_assembler',
		G:'gtceu:ev_electric_motor',
		I:'gtceu:ev_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:iv_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:iv_emitter',
		B:'gtceu:iv_electric_pump',
		C:'gtceu:iv_robot_arm',
		D:'#gtceu:circuits/luv',
		E:'gtceu:platinum_quadruple_cable',
		F:'gtceu:iv_assembler',
		G:'gtceu:iv_electric_motor',
		I:'gtceu:iv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:luv_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:luv_emitter',
		B:'gtceu:luv_electric_pump',
		C:'gtceu:luv_robot_arm',
		D:'#gtceu:circuits/uv',
		E:'gtceu:niobium_titanium_quadruple_cable',
		F:'gtceu:luv_assembler',
		G:'gtceu:luv_electric_motor',
		I:'gtceu:luv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:uv_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:uv_emitter',
		B:'gtceu:uv_electric_pump',
		C:'gtceu:uv_robot_arm',
		D:'#gtceu:circuits/uhv',
		E:'gtceu:yttrium_barium_cuprate_quadruple_cable',
		F:'gtceu:uv_assembler',
		G:'gtceu:uv_electric_motor',
		I:'gtceu:uv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('gtceu:zpm_circuit_assembler', [
		' ABA ',
		'CCDCC',
		'EDFDE',
		'GGDGG',
		' III '
	  ], {
		A:'gtceu:zpm_emitter',
		B:'gtceu:zpm_electric_pump',
		C:'gtceu:zpm_robot_arm',
		D:'#gtceu:circuits/uv',
		E:'gtceu:vanadium_gallium_quadruple_cable',
		F:'gtceu:zpm_assembler',
		G:'gtceu:zpm_electric_motor',
		I:'gtceu:zpm_conveyor_module'
	  })

	  e.recipes.create.mechanical_crafting('create:crushing_wheel', [
		'BAAAB',
		'ACDCA',
		'ADEDA',
		'ACDCA',
		'BAAAB'
	  ], {
		A:'gtceu:diamond_dust',
		B:'gtceu:sticky_resin',
		C:'gtceu:steel_plate',
		D:'gtceu:double_steel_plate',
		E:'gtceu:steel_gear'
	  })
	  e.recipes.create.mechanical_crafting('ad_astra:nasa_workbench', [
		'   A   ',
		' BACAB ',
		'DEFGFED',
		'DDHCHDD',
		' DDHDD '
	  ], {
		A:'gtceu:hv_robot_arm',
		B:'gtceu:hv_emitter',
		C:'gtceu:nether_star_lens',
		D:'gtceu:netherite_plate',
		E:'gtceu:gold_single_cable',
		F:'#gtceu:circuits/iv',
		G:'gtceu:hv_assembler',
		H:'gtceu:hv_conveyor_module'
	  })
	  e.recipes.create.mechanical_crafting('kubejs:t1_engine', [
		' AAA ',
		'ABCBA',
		'ACDCA',
		'AECEA',
		' AFA ',
		'FF FF'
	  ], {
		A:'gtceu:double_t_rocket_steel_plate',
		C:'gtceu:t_rocket_steel_gear',
		B:'gtceu:hv_electric_pump',
		D:'kubejs:t1_engine_frame',
		E:'gtceu:steel_firebox_casing',
		F:'kubejs:t1_fan'
	  })
	  e.recipes.create.mechanical_crafting('storagedrawers:controller', [
		' A A ',
		'AEAEA',
		'BDEDC',
		'AEAEA',
		' A A '
	  ], {
		A:'gtceu:clean_machine_casing',
		C:'gtceu:hv_input_bus',
		B:'gtceu:hv_output_bus',
		D:'storagedrawers:compacting_drawers_3',
		E:'#gtceu:circuits/hv'
	  })
	  e.recipes.create.mechanical_crafting('storagenetwork:master', [
		' ABA ',
		'BCDEB',
		'AFGFA',
		'BHDHB',
		' ABA '
	  ], {
		A:'gtceu:quartzite_plate',
		B:'gtceu:nether_quartz_plate',
		C:'storagenetwork:import_kabel',
		D:'gtceu:diamond_gear',
		E:'storagenetwork:export_kabel',
		F:'#gtceu:circuits/hv',
		G:'gtceu:mv_machine_hull',
		H:'storagenetwork:storage_kabel'
	  })
	  e.recipes.create.mechanical_crafting('ae2:controller', [
		'AAAAAAA',
		'AFBCBGA',
		'ABFDGBA',
		'ACDEDCA',
		'ABHDHBA',
		'AHBCBHA',
		'AAAAAAA',
	  ], {
		A:'ae2:smooth_sky_stone_block',
		B:'ae2:fluix_covered_dense_cable',
		C:'gtceu:exquisite_fluix_gem',
		D:'gtceu:exquisite_fluix_gem',
		E:'gtceu:hv_machine_hull',
		F:'ae2:logic_processor',
		G:'ae2:logic_processor',
		H:'ae2:engineering_processor'

	  })
	  e.recipes.create.mechanical_crafting('botania:runic_altar', [
		'AABCBAA',
		'ADEFEDA',
		'ADGHGDA',
		' ADDDA ',
		' AAAAA '
	  ], {
		A:'botania:livingrock',
		B:'botania:mana_pearl',
		C:'botania:mana_diamond',
		D:'gtceu:manasteel_frame',
		E:'eidolon:lesser_soul_gem',
		F:'minecraft:enchanting_table',
		G:'evilcraft:dark_power_gem',
		H:'botania:diluted_pool'

	  })

})
ItemEvents.entityInteracted(event => {
    if(event.item.id != "kubejs:nether_star_shell"){
        return
    }
    let entityName = event.getTarget().entityType
    if(entityName == "entity.minecraft.wither_skeleton"){
        event.server.runCommandSilent(`playsound minecraft:entity.wither.hurt ambient @a ${event.target.x} ${event.target.y} ${event.target.z}`)
        event.target.block.popItem("kubejs:nether_star")
        event.target.kill()
        event.item.shrink(1)

    }
    
})
ServerEvents.recipes(event => {
  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      "aba",
      "cdc",
      "aba"
    ],
    "reagents": "efgf",
    "key": {
      "a": {
        "item": "gtceu:alchemical_brass_plate"
      },
      "b": {
        "item": "ars_nouveau:green_archwood_wood"
      },
      "c": {
        "item": "gtceu:long_alchemical_brass_rod"
      },
      "d": {
        "item": "twilightforest:firefly_jar"
      },
      "e": {
        "item": "eidolon:holy_symbol"
      },
      "f": {
        "item": "kubejs:magical_chip_v1"
      },
      "g": {
        "item": "gtceu:dense_alchemical_brass_plate"
      }

    },
    "result": {
      "item": "ars_nouveau:imbuement_chamber",
      "count": 1
    }  
})})
ServerEvents.recipes(event => {

  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      "aaa",
      "aba",
      "ccc"
    ],
    "reagents": "dede",
    "key": {
      "a": {
        "item": "evilcraft:bloody_cobblestone"
      },
      "b": {
        "item": "evilcraft:blood_infusion_core"
      },
      "c": {
        "item": "minecraft:red_nether_bricks"
      },
      "d": {
        "item": "evilcraft:dark_power_gem"
      },
      "e": {
        "item": "kubejs:magical_chip_v1"
      }

    },
    "result": {
      "item": "evilcraft:blood_infuser",
      "count": 1
    }  
})})
ServerEvents.recipes(event => {

event.custom({
  "type": "eidolon:worktable",
  "pattern": [
    "aba",
    "bcb",
    "aba"
  ],
  "reagents": "dddd",
  "key": {
    "a": {
      "item": "eidolon:lesser_soul_gem"
    },
    "b": {
      "item": "evilcraft:promise_acceptor_iron"
    },
    "c": {
      "item": "evilcraft:bowl_of_promises_tier0"
    },
    "d": {
      "item": "gtceu:double_iron_plate"
    }
  },
  "result": {
    "item": "evilcraft:promise_tier_1",
    "count": 1
  }  
})})
ServerEvents.recipes(event => {

event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      "www",
      "wsw",
      "www"
    ],
    "reagents": "u b ",
    "key": {
      "w": {
        "item": "magistuarmory:woolen_fabric"
      },
      "s": {
        "item": "eidolon:shadow_gem"
      },
      "u": {
        "item": "eidolon:unholy_symbol"
      },
      "b": {
        "tag": "forge:dyes/blue"
      }
    },
    "result": {
      "item": "eidolon:wicked_weave",
      "count": 4
    }  
})})
ServerEvents.recipes(event => {

event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      "aba",
      "bcb",
      "aba"
    ],
    "reagents": "aaaa",
    "key": {
      "a": {
        "item": "eidolon:crimson_essence"
      },
      "b": {
        "item": "born_in_chaos_v1:fire_dust"
      },
      "c": {
        "item": "kubejs:nether_star"
      }
    },
    "result": {
      "item": "evilcraft:blood_infusion_core",
      "count": 1
    }
  })})
  ServerEvents.recipes(event => {

  event.custom(
    {
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "tag": "minecraft:pickaxes" }
            ],
            "stirs": 1
      
          }
      
        ],
        "result": {
          "item": "kubejs:tool_aspect",
          "count": 3
        }
      }
    )})
    ServerEvents.recipes(event => {

  event.custom(
    {
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "tag": "minecraft:axes" }
            ],
            "stirs": 1
      
          }
      
        ],
        "result": {
          "item": "kubejs:tool_aspect",
          "count": 3
        }
      }
    )
  event.custom(
    {
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "tag": "minecraft:shovels" }
            ],
            "stirs": 1
      
          }
      
        ],
        "result": {
          "item": "kubejs:tool_aspect",
          "count": 1
        }
      }
    )
    event.custom(
      {
          "type": "eidolon:crucible",
          "steps": [
            {
              "items": [
                { "tag": "minecraft:hoes" }
              ],
              "stirs": 1
        
            }
        
          ],
          "result": {
            "item": "kubejs:tool_aspect",
            "count": 2
          }
        }
      )})
      ServerEvents.recipes(event => {

      event.custom(
        {
            "type": "eidolon:crucible",
            "steps": [
              {
                "items": [
                  { "item": "gtceu:cobalt_brass_ingot" },
                  { "item": "kubejs:tool_aspect" },
                  { "item": "kubejs:tool_aspect" },
                  { "item": "kubejs:tool_aspect" }
                    ],
                "stirs": 1
          
              }
          
            ],
            "result": {
              "item": "gtceu:alchemical_brass_ingot",
              "count": 1
            }
          }
        )
  
  event.custom(
    {
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "item": "minecraft:crimson_fungus" },
              { "item": "minecraft:crimson_roots" },
              { "item": "minecraft:weeping_vines" }
            ]
          },
          {
            "items": [
              { "item": "minecraft:nether_wart" },
              { "item": "minecraft:nether_wart" }
            ]
          },
          {
            "items": [
              { "item": "gtceu:sulfur_dust" }
            ],
            "stirs": 1
      
          }
      
        ],
        "result": {
          "item": "eidolon:crimson_essence",
          "count": 2
        }
      }
    )
        event.custom(
            {
                "type": "eidolon:crucible",
                "steps": [
                  {
                    "items": [
                      { "tag": "botania:petals" },
                      { "tag": "botania:petals" },
                      { "tag": "botania:petals" },
                      { "tag": "botania:petals" }
                    ]
              
                  },
                  {
                    "items": [
                      { "item": "minecraft:bone" }
                    ],
                    "stirs": 1
              
                  }
              
                ],
                "result": {
                  "item": "kubejs:mystical_bone",
                  "count": 1
                }
              }
        )
        event.custom(
            {
                "type": "eidolon:crucible",
                "steps": [
                  {
                    "items": [
                      { "item": "eidolon:death_essence" },
                      { "item": "eidolon:death_essence" },
                      { "item": "eidolon:death_essence" },
                      { "item": "eidolon:death_essence" },
                      { "item": "eidolon:death_essence" }
                    ]
              
                  },
                  {
                    "items": [
                      { "item": "gtceu:dark_metal_dust" }
                    ]
              
                  },
                  {
                    "items": [
                      { "item": "eidolon:shadow_gem" }
                    ],
                    "stirs": 1
              
                  }
              
              
                ],
                "result": {
                  "item": "evilcraft:dark_gem",
                  "count": 1
                }
              }
        )
        event.custom(
            {
                "type": "eidolon:crucible",
                "steps": [
                  {
                    "items": [
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "item": "eidolon:enchanted_ash" }
                    ]
                  },
                  {
                    "items": [
                      { "tag": "forge:dusts/gold" }
                    ],
                    "stirs": 1
                  },
                  {
                    "items": [
                      { "tag": "forge:ingots/gold" }
                    ]
                  }
              
                ],
                "result": {
                  "item": "eidolon:arcane_gold_ingot",
                  "count": 1
                }
              }
        )
        event.custom(
            {
                "type": "eidolon:crucible",
                "steps": [
                  {
                    "items": [
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "tag": "forge:dusts/redstone" },
                      { "item": "eidolon:soul_shard" }
                    ]
                  },
                  {
                    "items": [
                      { "tag": "forge:ingots/gold" }
                    ]
                  }
                ],
                "result": {
                  "item": "eidolon:arcane_gold_ingot",
                  "count": 1
                }
              }
            )
 
})
ServerEvents.tags('block', event => {
  event.add('minecraft:stone_ore_replaceables', 'ad_astra:moon_stone')
  event.add('minecraft:stone_ore_replaceables', 'ad_astra:moon_sand')

})
GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:galena_vein")
    event.remove("gtceu:copper_tin_vein") 
    event.remove("gtceu:garnet_vein") 
    event.remove("gtceu:nickel_vein") 
    event.remove("gtceu:olivine_vein") 
    event.remove("gtceu:sapphire_vein") 
    event.remove("gtceu:monazite_vein") 
    event.remove("gtceu:certus_quartz_vein") 
    event.remove("gtceu:mica_vein") 
    event.remove("gtceu:topaz_vein") 

})
GTCEuServerEvents.oreVeins(event => {
//TF Veins
    event.add("twi:galena_vein", vein => {
        vein.clusterSize(25)
        .weight(40)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 30
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Galena) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )
        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('ice_shard')).size(1, 1))
                ))    })
    event.add("twi:diamond_vein", vein => {
        vein.clusterSize(25)
        .weight(40)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: -15
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Diamond) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )
        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 1))
                ))    })
    event.add("twi:lapis_vein", vein => {
        vein.clusterSize(25)
        .weight(40)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Lapis) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )
        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1,1))
                .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 1))

                ))    })
    event.add("twi:molybdenum_vein", vein => {
        vein.clusterSize(25)
        .weight(5)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Molybdenum) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )
        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))

                ))    })
    event.add("twi:olivine_vein", vein => {
        vein.clusterSize(25)
        .weight(60)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Olivine) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bentonite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1,1))
                .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))

                ))    })
    event.add("twi:coal_vein", vein => {
        vein.clusterSize(35)
        .weight(80)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 20
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Coal) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Coal).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Coal).size(2,4))

                ))    })
    event.add("twi:sapphire_vein", vein => {
        vein.clusterSize(25)
        .weight(60)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Sapphire) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Almandine).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrope).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 1))

                ))    })
    event.add("twi:nickel_vein", vein => {
        vein.clusterSize(25)
        .weight(40)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Nickel) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1,1))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))

                ))    })
    event.add("twi:lubricant_vein", vein => {
        vein.clusterSize(25)
        .weight(40)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Talc) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Soapstone).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Talc).size(1,1))
                .layer(l => l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))

                ))    })
    event.add("twi:gold_vein", vein => {
        vein.clusterSize(35)
        .weight(160)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Gold) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))

                ))    })
    event.add("twi:magnetite_vein", vein => {
        vein.clusterSize(35)
        .weight(160)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 30
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Magnetite) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1,1))

                ))    })

    event.add("twi:iron_vein", vein => {
        vein.clusterSize(30)
        .weight(120)
        .layer("stone")
        .density(0.2)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 0
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Iron) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Goethite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1,1))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 1))

                ))    })
    event.add("twi:apatite_vein", vein => {
        vein.clusterSize(25)
        .weight(40)
        .layer("stone")
        .density(0.25)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: -10
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Apatite) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Apatite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))

                ))    })
    event.add("twi:salt_vein", vein => {
        vein.clusterSize(30)
        .weight(50)
        .layer("stone")
        .density(0.2)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: -10
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Salt) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1,1))
                .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))

                ))    })
    event.add("twi:tin_vein", vein => {
        vein.clusterSize(30)
        .weight(50)
        .layer("stone")
        .density(0.2)
        .heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -30
                },
                max_inclusive: {
                  absolute: 30
                }
            }
        })
        .discardChanceOnAirExposure(0)
        .dimensions("twilightforest:twilight_forest")
        .biomes("#twilightforest:in_twilight_forest")
        .surfaceIndicatorGenerator(indicator => indicator
          .surfaceRock(GTMaterials.Tin) // [*] 
          .placement("surface") // 
          .density(0.4)
          .radius(5)
      )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Tin).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1,1))

                ))    })
//Overworld Veins
    event.add("ow:mica_vein", vein => {
      vein.clusterSize(30)
      .weight(20)
      .layer("stone")
      .density(0.25)
      .heightRange({
          height: {
              type: "uniform",
              min_inclusive: {
                absolute: 20
              },
              max_inclusive: {
                absolute: 40
              }
          }
      })
      .discardChanceOnAirExposure(0)
      .dimensions("minecraft:overworld")
      .biomes("#minecraft:is_overworld")
      .surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Mica) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
    )

      .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
              .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
              .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1,1))
              .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1,1))
              .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1,1))

              ))  })
//Moon Veins
  event.add("moon:certus_vein", vein => {
    vein.clusterSize(30)
    .weight(20)
    .layer("moon")
    .density(0.25)
    .heightRange({
        height: {
            type: "uniform",
            min_inclusive: {
              absolute: -30
            },
            max_inclusive: {
              absolute: 100
            }
        }
    })
    .discardChanceOnAirExposure(0)
    .dimensions("ad_astra:moon")
    .biomes("ad_astra:lunar_wastelands")
    .surfaceIndicatorGenerator(indicator => indicator
      .surfaceRock(GTMaterials.CertusQuartz) // [*] 
      .placement("surface") // 
      .density(0.4)
      .radius(5)
  )

    .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1,1))
            .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1,1))
            ))})
  event.add("moon:galena_vein", vein => {
      vein.clusterSize(25)
      .weight(40)
      .layer("moon")
      .density(0.25)
      .heightRange({
          height: {
              type: "uniform",
              min_inclusive: {
                absolute: -30
              },
              max_inclusive: {
                absolute: 100
              }
          }
      })
      .discardChanceOnAirExposure(0)
      .dimensions("ad_astra:moon")
      .biomes("ad_astra:lunar_wastelands")
      .surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Galena) // [*] 
        .placement("surface") // 
        .density(0.4)
        .radius(5)
    )

        .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
              .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
              .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1,1))
              .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
              .layer(l => l.weight(1).mat(GTMaterials.get('ice_shard')).size(1, 1))
              ))  })
  event.add("moon:monazite_vein", vein => {
    vein.clusterSize(25)
    .weight(30)
    .layer("moon")
    .density(0.25)
    .heightRange({
        height: {
            type: "uniform",
            min_inclusive: {
              absolute: -30
            },
            max_inclusive: {
              absolute: 100
            }
        }
    })
    .discardChanceOnAirExposure(0)
    .dimensions("ad_astra:moon")
    .biomes("ad_astra:lunar_wastelands")
    .surfaceIndicatorGenerator(indicator => indicator
      .surfaceRock(GTMaterials.Monazite) // [*] 
      .placement("surface") // 
      .density(0.4)
      .radius(5)
  )

      .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
            .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
            .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            ))})
event.add("moon:titan_vein", vein => {
  vein.clusterSize(25)
  .weight(16)
  .layer("moon")
  .density(0.25)
  .heightRange({
      height: {
          type: "uniform",
          min_inclusive: {
            absolute: -30
          },
          max_inclusive: {
            absolute: 100
          }
      }
  })
  .discardChanceOnAirExposure(0)
  .dimensions("ad_astra:moon")
  .biomes("ad_astra:lunar_wastelands")
  .surfaceIndicatorGenerator(indicator => indicator
    .surfaceRock(GTMaterials.Ilmenite) // [*] 
    .placement("surface") // 
    .density(0.4)
    .radius(5)
)

    .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
          .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
          .layer(l => l.weight(1).mat(GTMaterials.Chromite).size(1, 1))
          .layer(l => l.weight(1).mat(GTMaterials.GarnetSand).size(1, 1))
          ))})
event.add("moon:alum_vein", vein => {
  vein.clusterSize(25)
  .weight(16)
  .layer("moon")
  .density(0.25)
  .heightRange({
      height: {
          type: "uniform",
          min_inclusive: {
            absolute: -30
          },
          max_inclusive: {
            absolute: 100
          }
      }
  })
  .discardChanceOnAirExposure(0)
  .dimensions("ad_astra:moon")
  .biomes("ad_astra:lunar_wastelands")
  .surfaceIndicatorGenerator(indicator => indicator
    .surfaceRock(GTMaterials.Aluminium) // [*] 
    .placement("surface") // 
    .density(0.4)
    .radius(5)
)

    .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
          .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
          .layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 1))
          .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
          ))})
event.add("moon:copper_vein", vein => {
  vein.clusterSize(40)
  .weight(80)
  .layer("moon")
  .density(1.0)
  .heightRange({
      height: {
          type: "uniform",
          min_inclusive: {
            absolute: -30
          },
          max_inclusive: {
            absolute: 100
          }
      }
  })
  .discardChanceOnAirExposure(0)
  .dimensions("ad_astra:moon")
  .biomes("ad_astra:lunar_wastelands")
  .surfaceIndicatorGenerator(indicator => indicator
    .surfaceRock(GTMaterials.Copper) // [*] 
    .placement("surface") // 
    .density(0.4)
    .radius(5)
)

    .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
          .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(2, 4))
          .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 1))
          .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 1))
          .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 1))
          ))})
event.add("moon:tin_vein", vein => {
  vein.clusterSize(30)
  .weight(50)
  .layer("moon")
  .density(0.2)
  .heightRange({
      height: {
          type: "uniform",
          min_inclusive: {
            absolute: -30
          },
          max_inclusive: {
            absolute: 100
          }
      }
  })
  .discardChanceOnAirExposure(0)
  .dimensions("ad_astra:moon")
  .biomes("ad_astra:lunar_wastelands")
  .surfaceIndicatorGenerator(indicator => indicator
    .surfaceRock(GTMaterials.Tin) // [*] 
    .placement("surface") // 
    .density(0.4)
    .radius(5)
)

  .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
          .layer(l => l.weight(4).mat(GTMaterials.Tin).size(2, 4))
          .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1,1))

          ))})
event.add("moon:molybdenum_vein", vein => {
  vein.clusterSize(25)
  .weight(4)
  .layer("moon")
  .density(0.25)
  .heightRange({
      height: {
          type: "uniform",
          min_inclusive: {
            absolute: -30
          },
          max_inclusive: {
            absolute: 100
          }
      }
  })
  .discardChanceOnAirExposure(0)
  .dimensions("ad_astra:moon")
  .biomes("ad_astra:lunar_wastelands")
  .surfaceIndicatorGenerator(indicator => indicator
    .surfaceRock(GTMaterials.Molybdenum) // [*] 
    .placement("surface") // 
    .density(0.4)
    .radius(5)
)

  .layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
          .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
          .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1,1))
          .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
          .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))

          ))})
          
})
ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "integrateddynamics:drying_basin",
            "item": "kubejs:prepared_leather",
            "duration": 1250,
            "result": {
              "item": "kubejs:finished_leather"
            }
          }
    )
    event.custom(
        {
            "type": "integrateddynamics:drying_basin",
            "fluid": {
              "fluid": "gtceu:mana",
              "amount": 1000
            },
            "duration": 942,
            "result": {
              "item": "botania:mana_powder"
            }
          }
    )
    event.custom(
      {
        "type": "integrateddynamics:mechanical_drying_basin",
        "item": "kubejs:prepared_leather",
          "duration": 200,
          "result": {
            "item": "kubejs:finished_leather"
          }
        }
  )
  event.custom(
      {
        "type": "integrateddynamics:mechanical_drying_basin",
        "fluid": {
          "fluid": "gtceu:mana",
          "amount": 1000
        },
      "duration": 300,
          "result": {
            "item": "botania:mana_powder"
          }
        }
  )

})
ServerEvents.recipes(event => {
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "gtceu:signalum_dust",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 1000
        },
        "result": {
          "item": "gtceu:bloodinum_dust"
        },
        "duration": 400,
        "xp": 0.5,
        "tier": 1
      })
      event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "minecraft:wither_rose",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 20000
        },
        "result": {
          "item": "kubejs:bloody_rose"
        },
        "duration": 1000,
        "xp": 0.5,
        "tier": 1
      })

    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "evilcraft:dark_gem",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 500
        },
        "result": {
          "item": "evilcraft:dark_power_gem"
        },
        "duration": 200,
        "xp": 0.5
      })
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "evilcraft:bowl_of_promises_dusted",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 10000
        },
        "result": {
          "item": "evilcraft:bowl_of_promises_tier0"
        },
        "duration": 1000,
        "xp": 2,
        "tier": 0
      })
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "gtceu:wrought_iron_block",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 5000
        },
        "result": {
          "item": "evilcraft:promise_acceptor_iron"
        },
        "duration": 500,
        "xp": 5,
        "tier": 0
      })
      event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "elementalcraft:elementpipe_impaired",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 1000
        },
        "result": {
          "item": "elementalcraft:elementpipe",
        },
        "duration": 500,
        "xp": 5,
        "tier": 0
      })
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "gtceu:wrought_iron_block",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 5000
        },
        "result": {
          "item": "evilcraft:promise_acceptor_iron"
        },
        "duration": 500,
        "xp": 5,
        "tier": 0
      })
    event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "evilcraft:bowl_of_promises_tier0",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 40000
        },
        "result": {
          "item": "evilcraft:bowl_of_promises_tier1"
        },
        "duration": 2000,
        "xp": 5,
        "tier": 1
      })

      event.custom({
        "type": "evilcraft:blood_infuser",
        "item": "gtceu:rose_gold_block",
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 20000
        },
        "result": {
          "item": "evilcraft:promise_acceptor_gold"
        },
        "duration": 1000,
        "xp": 5,
        "tier": 1
      })

      event.custom({
        "type": "evilcraft:blood_infuser",
        "item": {"tag": "forge:raw_fishes"},
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 500
        },
        "result": {
          "item": {
            "item":"elementalcraft:water_shard",
             "count": 2 
      }
        },
        "duration": 200,
        "xp": 5,
        "tier": 0
      })
      event.custom({
        "type": "evilcraft:blood_infuser",
        "item": {"tag": "forge:raw_materials"},
        "fluid": {
          "fluid": "evilcraft:blood",
          "amount": 1000
        },
        "result": {
          "item": {
            "item":"born_in_chaos_v1:pileof_dark_metal",
             "count": 1 
      }
        },
        "duration": 200,
        "xp": 5,
        "tier": 0
      })

})
ServerEvents.recipes(event =>{
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gtceu:double_aluminium_plate"
          },
          "middle": {
            "item": "gtceu:plastic_circuit_board"
          },
          "top": {
            "item": "ae2:engineering_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_engineering_processor"
        }
      })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gtceu:double_rose_gold_plate"
          },
          "middle": {
            "item": "gtceu:plastic_circuit_board"
          },
          "top": {
            "item": "ae2:logic_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_logic_processor"
        }
      })
      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gtceu:double_silicon_plate"
          },
          "middle": {
            "item": "gtceu:cpu_chip"
          },
          "top": {
            "item": "ae2:silicon_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_silicon"
        }
      })
      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": "gtceu:double_drenched_iron_plate"
          },
          "middle": {
            "item": "gtceu:plastic_circuit_board"
          },
          "top": {
            "item": "ae2:calculation_processor_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "item": "ae2:printed_calculation_processor"
        }
      })

})
ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.imbuement(
        "gtceu:flawless_amethyst_gem", // input item
        "ars_nouveau:source_gem", // output
        1000, // source cost
        []
    )

})