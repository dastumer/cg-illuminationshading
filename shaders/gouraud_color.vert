#version 300 es

precision highp float;

in vec3 vertex_position;
in vec3 vertex_normal;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform float material_shininess; // n
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;

out vec3 ambient;
out vec3 diffuse;
out vec3 specular;

void main() {
    gl_Position = projection_matrix * view_matrix * model_matrix * vec4(vertex_position, 1.0);
    ambient = light_ambient;

    vec3 N = normalize(vertex_normal);
    vec3 L = vertex_position - light_position;
    L = normalize(L);
    float diffuseDot = dot(N,L);
    diffuse = light_color * diffuseDot;

    vec3 R = (2 * diffuseDot) * N - L;
    vec3 V = vertex_position - camera_position;
    V = normalize(V);
    float specularDot = dot(R,V);
    specular = light_color * pow(specularDot,material_shininess);
}
