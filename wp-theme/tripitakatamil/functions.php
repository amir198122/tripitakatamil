<?php
/**
 * Tripitakatamil block theme.
 *
 * @package Tripitakatamil
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme setup and Google Fonts (Noto Sans Tamil + Latin fallback).
 */
function tripitakatamil_setup() {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'automatic-feed-links' );

	$fonts_url = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600;700&family=Noto+Sans:ital,wght@0,400;0,600;1,400&display=swap';

	add_editor_style( $fonts_url );
}
add_action( 'after_setup_theme', 'tripitakatamil_setup' );

/**
 * Front-end fonts.
 */
function tripitakatamil_enqueue_fonts() {
	wp_enqueue_style(
		'tripitakatamil-fonts',
		'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600;700&family=Noto+Sans:ital,wght@0,400;0,600;1,400&display=swap',
		array(),
		null
	);
}
add_action( 'wp_enqueue_scripts', 'tripitakatamil_enqueue_fonts' );
