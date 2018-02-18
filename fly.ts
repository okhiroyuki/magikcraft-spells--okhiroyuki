const magik = magikcraft.io;

function fly(){
    const location = magik.hic();
    const nearbyEntities = location.getWorld().getNearbyEntities(location, 8, 8, 8);
    nearbyEntities.forEach(function(entity){
        magik.dixit(entity.getName());
    });
}
