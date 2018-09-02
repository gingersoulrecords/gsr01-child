<?php
//* Code goes here

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {

//    wp_enqueue_style( 'hug-css', get_stylesheet_directory_uri().'/hugrid.css' );
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
//    wp_enqueue_script( 'hug-js', get_stylesheet_directory_uri().'/js/hugrid.js' );
   wp_enqueue_script( 'gsr-child-scripts', get_stylesheet_directory_uri().'/js/scripts.js' );
}


