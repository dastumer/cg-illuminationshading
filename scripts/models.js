function createPlaneVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);

    
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        -0.5, 0.0,  0.5,
         0.5, 0.0,  0.5,
         0.5, 0.0, -0.5,
        -0.5, 0.0, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
         0,  1,  2,      0,  2,  3,
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}

function createCubeVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);

    
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        // Front face
        -0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
         0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,

        // Back face
         0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5,  0.5, -0.5,
         0.5,  0.5, -0.5,

        // Top face
        -0.5,  0.5,  0.5,
         0.5,  0.5,  0.5,
         0.5,  0.5, -0.5,
        -0.5,  0.5, -0.5,

        // Bottom face
         0.5, -0.5,  0.5,
        -0.5, -0.5,  0.5,
        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,

        // Right face
         0.5, -0.5,  0.5,
         0.5, -0.5, -0.5,
         0.5,  0.5, -0.5,
         0.5,  0.5,  0.5,

        // Left face
        -0.5, -0.5, -0.5,
        -0.5, -0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5
    ];

    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        // Front
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,
        0.0,  0.0,  1.0,

        // Back
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        // Top
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        0.0,  1.0,  0.0,

        // Bottom
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        // Right
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,
        1.0,  0.0,  0.0,

        // Left
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0
    ];

    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        // Front
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Back
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Top
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Bottom
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Right
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        // Left
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
    ];

    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
         0,  1,  2,      0,  2,  3,   // Front
         4,  5,  6,      4,  6,  7,   // Back
         8,  9, 10,      8, 10, 11,   // Top
        12, 13, 14,     12, 14, 15,   // Bottom
        16, 17, 18,     16, 18, 19,   // Right
        20, 21, 22,     20, 22, 23    // Left
    ];

    /*
    console.log(vertices);
    console.log(normals);
    console.log(texcoords);
    console.log(indices);
    */

    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3) // should be 
    vertex_array.face_index_count = indices.length;
    //console.log("Cube: "+vertex_array.face_index_count);

    // return created Vertex Array Object
    return vertex_array;
}


function createSphereVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // calculate vertices, normals, texture coordinate, and faces
    let slices = 36;
    let stacks = 18;

    let phi = 0;
    let delta_phi = 2 * Math.PI / slices;
    let theta = Math.PI / 2;
    let delta_theta = -Math.PI / stacks;

    let vertices = [];
    let normals = [];
    let texcoords = [];
    for (let i = 0; i <= slices; i++) {
        let cos_phi = Math.cos(phi);
        let sin_phi = Math.sin(phi);
        theta = Math.PI / 2;
        for (let j = 0; j <= stacks; j++) {
            let cos_theta = Math.cos(theta);
            let sin_theta = Math.sin(theta);
            let x = cos_theta * cos_phi;
            let y = sin_theta;
            let z = cos_theta * -sin_phi;
            vertices.push(x/2, y/2, z/2);
            normals.push(x, y, z);
            texcoords.push(i / slices, 1.0 - j / stacks);

            theta += delta_theta;
        }
        phi += delta_phi;
    }

    let indices = [];
    for (let i = 0; i < slices; i++) {
        let k1 = i * (stacks + 1);
        let k2 = (i + 1) * (stacks + 1);
        for (let j = 0; j < stacks; j++) {
            indices.push(k1, k1 + 1, k2);
            indices.push(k1 + 1, k2 + 1, k2);
            k1++;
            k2++;
        }
    }

    /*
    console.log(vertices);
    console.log(normals);
    console.log(texcoords);
    console.log(indices);
    */

    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;
    //console.log("Sphere: "+vertex_array.face_index_count);

    // return created Vertex Array Object
    return vertex_array;
}


// The goal for this custom model was to implement a cube of which one face (the top face) is rotated an angle phi relative
// to the bottom face. By defining the amount of "stacks" we can effectively make this rotation appear smoother by
// partioning the 3D model into multiple offset rectangular prisms. Because we know which stack we are on, we also know which 
// seciton of the texture to pull from.
function createCustomVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);
    
    // calculate vertices, normals, texture coordinate, and faces
    let stacks = 100;
    let polar_coords = [5*Math.PI/4, 7*Math.PI/4, Math.PI/4, 3*Math.PI/4]; // base coordinates of vertices for bottom face
    //let polar_matrix = Math.matrix(polar_coords);

    // Define our model variables
    let offset = Math.PI / 4; // how far we wanted to rotate top stack relative to bottom face. Each stack between will form a gradient
    let phi = 0; // Starting angle
    let delta_phi = offset / stacks; // Offset for one stack
    let height = 1; // Side length of offset cube
    let delta_height = height / stacks; // Stack height
    
    // Empty arrays and initialize index counter
    let vertices = [];
    let normals = [];
    let texcoords = [];
    let indices = [];
    let curr_index = 0;

    // Assign vertices, normals, and texcoords
    for (let i = 0; i <= stacks; i++) {

        // Bottom face
        if (i == 0) {
            for (let j = 0; j <= 3; j++) {
                // Polar to cartesian
                let vx = Math.cos(polar_coords[j])/Math.sqrt(2);
                let vy = Math.sin(polar_coords[j])/Math.sqrt(2);
                let vz = -height/2;

                let nx = 0;
                let ny = 0;
                let nz = -1;

                // Vertices
                vertices.push(vx, vy, vz);

                // Normals
                normals.push(nx, ny, nz);

                // Increment the current index
                curr_index++;
            }

            // Indices
            indices.push(0,1,2,0,2,3); // push bottom face

            // Texcoords
            texcoords.push( 0.0,  0.0, // temporary tex coords until fixed
                            1.0,  0.0,
                            1.0,  1.0,
                            0.0,  1.0);
        }

        // Side face polys
        if (i < stacks) {
            for (let j = 0; j <= 3; j++) {
                // Polar to cartesian
                
                // Bottom left
                let vx = Math.cos(polar_coords[j])/Math.sqrt(2);
                let vy = Math.sin(polar_coords[j])/Math.sqrt(2);
                let vz = -height/2 + i*delta_height;
                vertices.push(vx, vy, vz);
                let nx = Math.cos(polar_coords[j] + Math.PI/4);
                let ny = Math.sin(polar_coords[j] + Math.PI/4);
                let nz = 0;
                normals.push(nx, ny, nz);
                indices.push(curr_index);
                curr_index++; // Increment the current index

                // Bottom right
                vx = Math.cos(polar_coords[(j+1)%4])/Math.sqrt(2);
                vy = Math.sin(polar_coords[(j+1)%4])/Math.sqrt(2);
                vz = -height/2 + i*delta_height;
                vertices.push(vx, vy, vz);
                nx = Math.cos(polar_coords[j] + Math.PI/4);
                ny = Math.sin(polar_coords[j] + Math.PI/4);
                nz = 0;
                normals.push(nx, ny, nz);
                indices.push(curr_index);
                curr_index++; // Increment the current index

                // Top right
                vx = Math.cos(polar_coords[(j+1)%4] + delta_phi)/Math.sqrt(2);
                vy = Math.sin(polar_coords[(j+1)%4] + delta_phi)/Math.sqrt(2);
                vz = -height/2 + (i+1)*delta_height;
                vertices.push(vx, vy, vz);
                nx = Math.cos(polar_coords[j] + Math.PI/4);
                ny = Math.sin(polar_coords[j] + Math.PI/4);
                nz = 0;
                normals.push(nx, ny, nz);
                indices.push(curr_index);  
                indices.push(curr_index-2);  // push starting index for face 
                indices.push(curr_index);  // second index
                curr_index++; // Increment the current index

                // Top left
                vx = Math.cos(polar_coords[j] + delta_phi)/Math.sqrt(2);
                vy = Math.sin(polar_coords[j] + delta_phi)/Math.sqrt(2);
                vz = -height/2 + (i+1)*delta_height;
                vertices.push(vx, vy, vz);
                nx = Math.cos(polar_coords[j] + Math.PI/4);
                ny = Math.sin(polar_coords[j] + Math.PI/4);
                nz = 0;
                normals.push(nx, ny, nz); 
                indices.push(curr_index);              
                curr_index++; // Increment the current index

                // Texcoords
                texcoords.push( 0.0,  i*height/stacks, // temporary tex coords until fixed
                                1.0,  i*height/stacks,
                                1.0,  (i+1)*height/stacks,
                                0.0,  (i+1)*height/stacks); 
                
                //polar_coords[j] = polar_coords[j] % (2*Math.PI); // trim to range 0 to 2 pi
            }

            // Offset for next stack
            for(let ind=0;ind<polar_coords.length;ind++){
                polar_coords[ind] = polar_coords[ind] + delta_phi
            }
        }

        // Top face
        if (i == stacks) {
            for (let j = 0; j <= 3; j++) {
                // Polar to cartesian
                let vx = Math.cos(polar_coords[j])/Math.sqrt(2);
                let vy = Math.sin(polar_coords[j])/Math.sqrt(2);
                let vz = height/2;

                let nx = 0;
                let ny = 0;
                let nz = 1;

                // Vertices
                vertices.push(vx, vy, vz);

                // Normals
                normals.push(nx, ny, nz);

                // Increment the current index
                curr_index++;
            }

            // Indices
            indices.push(curr_index-4, curr_index-3, curr_index-2, curr_index-4, curr_index-2, curr_index-1); // push top face

            // Texcoords
            texcoords.push( 0.0,  0.0, // temporary tex coords until fixed
                            1.0,  0.0,
                            1.0,  1.0,
                            0.0,  1.0);
        }
    }

    /*
    console.log(vertices);
    console.log(normals);
    console.log(texcoords);
    console.log(indices);    
    */

    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);

    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);

    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);
    
    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);

    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;
    
    // Log information for user:
    console.log("Custom model vertices: "+vertices.length);
    console.log("Custom model normals: "+normals.length);
    console.log("Custom model texcoords: "+texcoords.length);
    console.log("Custom model indices: "+indices.length);

    // return created Vertex Array Object
    return vertex_array;
}