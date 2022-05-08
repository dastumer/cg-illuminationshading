#version 300 es

precision mediump float;

in vec3 frag_pos;
in vec3 frag_normal;
in vec2 frag_texcoord;

uniform vec3 light_ambient;
uniform vec3 light_position[10];
uniform vec3 light_color[10];
uniform vec3 camera_position;
uniform vec3 material_color;      // Ka and Kd
uniform vec3 material_specular;   // Ks
uniform float material_shininess; // n
uniform sampler2D image;          // use in conjunction with Ka and Kd

out vec4 FragColor;

void main() {
    vec3 diffuse = vec3(0.0, 0.0, 0.0);
    vec3 specular = vec3(0.0, 0.0, 0.0);
    
    for(int i=0; i<2; i++){
        // Peter implemented FragColor
        vec3 N = normalize(frag_normal);
        vec3 L = light_position[i] - frag_pos;
        L = normalize(L);
        float diffuseDot = dot(N,L);
        diffuseDot = max(0.0,diffuseDot);
        diffuse = (light_color[i] * diffuseDot) + diffuse; // diffuse calc

        vec3 R = (2.0 * diffuseDot) * N - L;
        vec3 V = camera_position - frag_pos;
        V = normalize(V);
        float specularDot = dot(R,V);
        specularDot = max (0.0,specularDot);
        specular = (light_color[i] * pow(specularDot,material_shininess)) + specular; // specular calc
    }
    diffuse.x = min(1.0, diffuse.x);
    diffuse.y = min(1.0, diffuse.y);
    diffuse.z = min(1.0, diffuse.z);
    specular.x = min(1.0, specular.x);
    specular.y = min(1.0, specular.y);
    specular.z = min(1.0, specular.z);

    vec3 FragHolder = (light_ambient * material_color) + (diffuse * material_color) + (specular * material_specular);
    
    // Ben implemented texture and final
    vec4 myTexture = texture(image, frag_texcoord); 
    vec3 final = myTexture.rgb * FragHolder;

    FragColor = vec4(final, 1.0); // FragColor out
}
