#version 300 es

precision highp float;

in vec3 vertex_position;
in vec3 vertex_normal;
in vec2 vertex_texcoord; // not in gouraud_color

uniform vec3 light_ambient;
uniform vec3 light_position[10];
uniform vec3 light_color[10];
uniform vec3 camera_position;
uniform float material_shininess;
uniform vec2 texture_scale; // not in gouraud_color
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 ambient;
out vec3 diffuse;
out vec3 specular;
out vec2 frag_texcoord; // not in gouraud_color

void main() {
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);

    // Peter implemented ambient, diffuse, and specular below
    vec3 world_vertex_position = vec3(model_matrix * vec4(vertex_position, 1.0));
    mat3 MVI = transpose(inverse(mat3(model_matrix)));
    vec3 world_vertex_normal = MVI * vertex_normal;

    ambient = light_ambient; // ambient out

    diffuse = vec3(0.0, 0.0, 0.0);
    specular = vec3(0.0, 0.0, 0.0);
    
    for(int i=0; i<10; i++){
        vec3 N = normalize(world_vertex_normal);
        vec3 L = light_position[i] - world_vertex_position;
        L = normalize(L);
        float diffuseDot = dot(N,L);
        diffuseDot = max(0.0,diffuseDot);
        diffuse = (light_color[i] * diffuseDot) + diffuse; // diffuse out

        vec3 R = (2.0 * diffuseDot) * N - L;
        vec3 V = camera_position - world_vertex_position;
        V = normalize(V);
        float specularDot = dot(R,V);
        specularDot = max (0.0,specularDot);
        specular = (light_color[i] * pow(specularDot,material_shininess)) + specular; // specular out 
    }
    diffuse.x = min(1.0, diffuse.x);
    diffuse.y = min(1.0, diffuse.y);
    diffuse.z = min(1.0, diffuse.z);
    specular.x = min(1.0, specular.x);
    specular.y = min(1.0, specular.y);
    specular.z = min(1.0, specular.z);

    frag_texcoord = vertex_texcoord * texture_scale; // frag_texcoord out
}
