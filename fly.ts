const magik = magikcraft.io;

function fly(){
    const location = magik.hic();
    const nearbyEntities = location.getWorld().getNearbyEntities(location, 0, 0, 0);
    nearbyEntities.forEach(function(entity){
        magik.dixit(entity.getName());
    });
}
