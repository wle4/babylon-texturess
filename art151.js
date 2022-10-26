//draw sphere at specified position of specified diameter
function createSphere(x, y, z, diam, scene){
    // babylon built-in 'sphere' shape.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: diam, segments: 32}, scene);
    // Move the x, y, z position
    sphere.position = new BABYLON.Vector3(x, y, z);
    return sphere;
}

function fileMat(file, scene){
    //create material
    var mat = new BABYLON.StandardMaterial('material', scene);
    mat.diffuseTexture = new BABYLON.Texture(file, scene);
    return mat; 
}

function hexMat(hex, scene){
    var mat = new BABYLON.StandardMaterial('material', scene);
    mat.diffuseColor = BABYLON.Color3.FromHexString(hex, scene);
    return mat; 
}