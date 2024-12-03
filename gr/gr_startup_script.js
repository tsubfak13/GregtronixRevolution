//Twilight Forest

GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    GTWorldGenLayers.STONE.levels = [new ResourceLocation("minecraft", "overworld"), new ResourceLocation("twilightforest", "twilight_forest")];
  })

//Moon

GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
  event.create('moon')
      .targets('*') // [*] 
      .dimensions('ad_astra:moon') // [*]
})
GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
  e.create('moonstone', 'ore') // 
      .stateSupplier(() => Block.getBlock('ad_astra:moon_stone').defaultBlockState()) // 
      .baseModelLocation('ad_astra:block/moon_stone') // 
      .unificationEnabled(true)
      .materialIconType(GTMaterialIconType.ore)
      .generationCondition(ItemGenerationCondition.hasOreProperty)
  e.create('moonsand', 'ore') // 
      .stateSupplier(() => Block.getBlock('ad_astra:moon_sand').defaultBlockState()) // 
      .baseModelLocation('ad_astra:block/moon_sand') // 
      .unificationEnabled(true)
      .materialIconType(GTMaterialIconType.ore)
      .generationCondition(ItemGenerationCondition.hasOreProperty)

})

const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("desh")
    .ingot()
    .ore()
    .color(0xe66e38).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("enderium")
    .ingot()
    .color(0x3a8f98).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("lumium")
    .ingot()
    .color(0xffe599).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("signalum")
    .ingot()
    .color(0xfd4d0d).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("ice_shard")
    .gem()
    .ore()
    .color(0xc9d7f8).iconSet(GTMaterialIconSet.QUARTZ)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("tttt_rocket_steel")
    .ingot()
    .fluid()
    .color(0xbf3737).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("ttt_rocket_steel")
    .ingot()
    .fluid()
    .color(0x90647d).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("tt_rocket_steel")
    .ingot()
    .fluid()
    .color(0xc1763a).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("t_rocket_steel")
    .ingot()
    .fluid()
    .color(0x7d7d7d).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("netherite")
    .ingot()
    .fluid()
    .color(0x564947).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("fluix")
    .gem()
    .fluid()
    .color(0x8f65c1).iconSet(GTMaterialIconSet.QUARTZ)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("source")
    .gem()
    .fluid()
    .color(0xe340ff).iconSet(GTMaterialIconSet.QUARTZ)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)

    event.create("arcane_gold")
    .ingot()
    .fluid()
    .color(0xf6b26b).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("bloodinum")
    .ingot()
    .color(0xa61c00).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("ironwood")
    .ingot()
    .fluid()
    .color(0x6daa85).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("manasteel")
    .ingot()
    .color(0x5074eb).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("compressed_iron")
    .ingot()
    .color(0x666666).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("scarlet_neodymium")
    .ingot()
    .ore()
    .color(0xff0000).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("azure_neodymium")
    .ingot()
    .ore()
    .color(0x0000ff).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)

    event.create("fiery")
    .ingot()
    .color(0xd47100).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("drenched_iron")
    .ingot()
    .color(0xa9d6ff).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("swift_alloy")
    .ingot()
    .color(0xf7bc5e).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("ethylumium")
    .ingot()
    .color(0xfff3ce).iconSet(GTMaterialIconSet.BRIGHT)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("nether_star_alloy")
    .ingot()
    .color(0xffffff).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)

    event.create("dark_metal")
    .ingot()
    .color(0x54566d).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create("pewter")
    .ingot()
    .color(0xd9d9d9).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create('andesite_alloy')
    .ingot()
    .components('1x andesite', '1x iron')
    .color(0x99B09F).iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create('alchemical_brass')
    .ingot()
    .color(0xffed00).iconSet(GTMaterialIconSet.DULL)
    .flags(GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_ROUND,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_LENS,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_DENSE,GTMaterialFlags.FORCE_GENERATE_BLOCK,GTMaterialFlags.GENERATE_BOLT_SCREW)

    event.create('diamondd')
    .fluid()
    .color(0xC8FFFF).iconSet(GTMaterialIconSet.FLUID)
    event.create('mana')
    .fluid()
    .color(0x509eeb).iconSet(GTMaterialIconSet.FLUID)
    event.create('tannic_acid')
    .fluid()
    .color(0xe3c170).iconSet(GTMaterialIconSet.FLUID)
    event.create('lime_water')
    .fluid()
    .components('1x water', '1x quicklime')
    .color(0xeaeaea).iconSet(GTMaterialIconSet.FLUID)
    event.create('twilight_air')
    .gas()
    .color(0x5e6bd2).iconSet(GTMaterialIconSet.FLUID)
    event.create('liquid_twilight_air')
    .fluid()
    .color(0x5e6bd2).iconSet(GTMaterialIconSet.FLUID)
    
GTMaterials.Gold.addFlags(GTMaterialFlags.GENERATE_GEAR)
GTMaterials.BlueAlloy.addFlags(GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FINE_WIRE)

 })

ItemEvents.modification(event => {
    event.modify('born_in_chaos_v1:spiritual_dust', item => {
        item.fireResistant = true
        })
    event.modify('minecraft:torch', item => {
        item.fireResistant = true
        })
    event.modify('minecraft:soul_torch', item => {
        item.fireResistant = true
        })

  })
StartupEvents.registry("block", (event) => {
    event.create("infinity_archwood") 
    .displayName("Infinity Archwood") // Set a custom name
    .soundType('wood')
    .lightLevel(1.0)
    .mapColor('wood') // Set a material (affects the sounds and some properties)
    .hardness(3.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/axe") //can be mined faster with an axe
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
  })

Platform.mods.kubejs.name = 'Gegtronix Revolution'//修改kubejs物品mod名
StartupEvents.registry('item', e => {
//e.create('物品id','物品类型').displayName('物品名称')

  //基础物品
  e.create('artifact_1', 'basic').displayName('Artifact Eternity')  
  e.create('artifact_2', 'basic').displayName('Artifact Nebula')  
  e.create('artifact_3', 'basic').displayName('Artifact Abyss')  
  e.create('artifact_4', 'basic').displayName('Artifact Radiance')  
  e.create('artifact_5', 'basic').displayName('Artifact Nexus')  
  e.create('artifact_6', 'basic').displayName('Artifact Aurora')  
  e.create('artifact_7', 'basic').displayName('Artifact Zenith')  
  e.create('artifact_8', 'basic').displayName('Artifact Eclipse')  
  e.create('artifact_9', 'basic').displayName('Artifact Vortex')  
  e.create('artifact_10', 'basic').displayName('Artifact Seraph')  
  e.create('artifact_11', 'basic').displayName('Artifact Solstice')  
  e.create('artifact_12', 'basic').displayName('Artifact Phantom')  
  e.create('black_petal', 'basic').displayName('Magical Black Petal')  
  e.create('blue_petal', 'basic').displayName('Magical Blue Petal')  
  e.create('blood_chip', 'basic').displayName('Blood Chip')  
  e.create('bloody_rose', 'basic').displayName('Bloody Rose')  
  e.create('botany_chip', 'basic').displayName('Botany Chip') 
  e.create('brown_petal', 'basic').displayName('Magical Brown Petal')   
  e.create('burger_chip', 'basic').displayName('Burger Processor')  
  e.create('burger_core', 'basic').displayName('Burger Core')  
  e.create('calculation_processor_v2', 'basic').displayName('Calculation Processor V2')  
  e.create('calculation_processor_v3', 'basic').displayName('Calculation Processor V3')  
  e.create('calculation_processor_v4', 'basic').displayName('Calculation Processor V4')  
  e.create('calculation_processor_v5', 'basic').displayName('Calculation Processor V5')  
  e.create('ccq_dust', 'basic').displayName('Charged Certus Quartz Crystal Dust')  
  e.create('create_chip', 'basic').displayName('Create Chip')  
  e.create('cyan_petal', 'basic').displayName('Magical Cyan Petal') 
  e.create('finished_leather', 'basic').displayName('Finished Leather')  
  e.create('gray_petal', 'basic').displayName('Magical Gray Petal')  
  e.create('green_petal', 'basic').displayName('Magical Green Petal')  
  e.create('light_blue_petal', 'basic').displayName('Magical Light Blue Petal')  
  e.create('light_gray_petal', 'basic').displayName('Magical Light Gray Petal')  
  e.create('lime_petal', 'basic').displayName('Magical Lime Petal')  
  e.create('magenta_petal', 'basic').displayName('Magical Magenta Petal')  
  e.create('magic_board_v1', 'basic').displayName('Crude Mgic Circuit Board')
  e.create('magic_board_v2', 'basic').displayName('Basic Mgic Circuit Board')
  e.create('magic_board_v3', 'basic').displayName('Refined Mgic Circuit Board')
  e.create('magic_board_v4', 'basic').displayName('Perfect Mgic Circuit Board')
  e.create('magic_board_v5', 'basic').displayName('Ultimate Mgic Circuit Board')
  e.create('magical_chip_v1', 'basic').displayName('Crude Magic Chip')  
  e.create('magical_chip_v2', 'basic').displayName('Basic Magic Chip')  
  e.create('magical_chip_v3', 'basic').displayName('Refined Magic Chip')
  e.create('magical_chip_v4', 'basic').displayName('Perfect Magic Chip')
  e.create('magical_chip_v5', 'basic').displayName('Ultimate Magic Chip')
  e.create('mystical_bone', 'basic').displayName('Mystical Bone')
  e.create('nether_star', 'basic').displayName('Imitation Nether Star')  
  e.create('nether_star_shell', 'basic').displayName('Imitation Nether Star Shell')  
  e.create('orange_petal', 'basic').displayName('Magical Orange Petal')  
  e.create('petal_dust', 'basic').displayName('Mystical Flower Dust')
  e.create('pink_petal', 'basic').displayName('Magical Pink Petal')  
  e.create('prepared_leather', 'basic').displayName('Prepared Leather')  
  e.create('purple_petal', 'basic').displayName('Magical Purple Petal')  
  e.create('red_petal', 'basic').displayName('Magical Red Petal')  
  e.create('scraped_leather', 'basic').displayName('Scraped Leather')  
  e.create('steam_chip', 'basic').displayName('Steam Chip')  
  e.create('soaked_leather', 'basic').displayName('Soaked Leather')  
  e.create('tasty_circuit_board', 'basic').displayName('Tasty Mgic Circuit Board')  
  e.create('white_petal', 'basic').displayName('Magical White Petal')  
  e.create('yellow_petal', 'basic').displayName('Magical Yellow Petal')  
  e.create('t1_core', 'basic').displayName('T1 Rocket Core') 
  e.create('t1_engine', 'basic').displayName('T1 Engine')  
  e.create('t1_engine_frame', 'basic').displayName('T1 Engine Frame')  
  e.create('t1_fan', 'basic').displayName('T1 Engine Fan')  
  e.create('t1_fin', 'basic').displayName('T1 Rokcet Fin')  
  e.create('t1_nose', 'basic').displayName('T1 Rocket Nose Cone')  
  e.create('t1_tank', 'basic').displayName('T1 Tank')  
  e.create('t2_core', 'basic').displayName('T2 Rocket Core')  
  e.create('t2_engine', 'basic').displayName('T2 Engine') 
  e.create('t2_engine_frame', 'basic').displayName('T2 Engine Frame')  
  e.create('t2_fan', 'basic').displayName('T2 Engine Fan')
  e.create('t2_fin', 'basic').displayName('T2 Rokcet Fin')  
  e.create('t2_nose', 'basic').displayName('T2 Rocket Nose Cone')   
  e.create('t2_tank', 'basic').displayName('T2 Tank')  
  e.create('t3_core', 'basic').displayName('T3 Rocket Core')  
  e.create('t3_engine', 'basic').displayName('T3 Engine') 
  e.create('t3_engine_frame', 'basic').displayName('T3 Engine Frame')  
  e.create('t3_fan', 'basic').displayName('T3 Engine Fan')  
  e.create('t3_fin', 'basic').displayName('T3 Rokcet Fin')  
  e.create('t3_nose', 'basic').displayName('T3 Rocket Nose Cone')  
  e.create('t3_tank', 'basic').displayName('T3 Tank')  
  e.create('t4_core', 'basic').displayName('T4 Rocket Core')  
  e.create('t4_engine', 'basic').displayName('T4 Engine')  
  e.create('t4_engine_frame', 'basic').displayName('T4 Engine Frame')  
  e.create('t4_fan', 'basic').displayName('T4 Engine Fan')  
  e.create('t4_fin', 'basic').displayName('T4 Rokcet Fin')  
  e.create('t4_tank', 'basic').displayName('T4 Tank')  
  e.create('t4_nose', 'basic').displayName('T4 Rocket Nose Cone')  
  e.create('tool_aspect', 'basic').displayName('Tool Aspect') 

  })
let ingots = ['copper','bronze','tin','steel','iron','gold','diamond','brass','zinc','golden','lead','silver','sulfur','cinnabar','niter','apatite','niter','nickel','uranium','osmium','fluorite']
let mods = ['industrialforegoing','ad_astra','magistuarmory','create','eidolon','occultism','thermal','mekanism','iceandfire','galosphere']
let components = ['deep','raw','deepslate']
let blocks = ['ore','block']
WorldgenEvents.remove(event => {
    //event.removeFeatureById('surface_structures', ['minecraft:furnace'])
    for(let i of ingots) {
      for(let m of mods) {
          for(let c of components) {    
            for(let b of blocks) {                
            
            event.removeOres(props => {
      
              props.blocks = [`${m}:${c}_${i}_${b}`,`${m}:${i}_${b}`]
          })}}}}
  event.removeOres(props => {
      
    props.blocks = [
'create:zinc_ore','create:deepslate_zinc_ore','ad_astra:moon_desh_ore','ad_astra:moon_iron_ore','ad_astra:moon_ice_shard_ore',
'elementalcraft:inert_crystal_ore','elementalcraft:deepslate_inert_crystal_ore','evilcraft:dark_ore_deepslate','evilcraft:dark_ore',
'minecraft:furnace','rftoolsbase:dimensionalshard_overworld','rftoolsbase:dimensionalshard_nether','forbidden_arcanus:stella_arcanum',
'forbidden_arcanus:xpetrified_ore','occultism:silver_ore_deepslate','forbidden_arcanus:deepslate_arcane_crystal_ore'
]
    })    

  })