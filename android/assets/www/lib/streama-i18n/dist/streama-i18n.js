angular.module('streama.translations', ['pascalprecht.translate'])

	.config(['$translateProvider', function ($translateProvider) {
		$translateProvider.determinePreferredLanguage();
		$translateProvider.fallbackLanguage('en');
	}])

	.run(['$rootScope', function ($rootScope) {
		$rootScope.availableLanguages = ['en', 'fr', 'es', 'de', 'kr', 'nl', 'pt'];
	}]);
/**
 * Created by antonia on 14/05/16.
 * Translation by @ManuGithubSteam and @bastilimbach on 14/01/17
 */
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('de', {
		LOGIN: {
			TITLE: 'Bitte einloggen',
			USERNAME: 'Benutzername',
			PASSWORD: 'Passwort',
			FIRST_TIME_HINT: 'Erstes mal hier? Versuche \'admin\' für Benutzername und Passwort.',
			SUBMIT: 'Login'
		},
		DASHBOARD: {
			TITLE: 'Dashboard',
			NEW_RELEASES: 'Neuerscheinungen',
			CONTINUE_WATCHING: 'Weiterschauen',
			DISCOVER_SHOWS: 'Entdecke Serien',
			DISCOVER_MOVIES: 'Entdecke Filme',
			DISCOVER_OTHER_VIDEOS: 'Entdecke Videos',
			SORT: 'Sortiere:',
			SEARCH_BY_NAME: 'Nach Namen suchen...',
			FILTER_BY_TAG: 'Mit Tags filtern...',
			BROWSE_GENRES: 'Durchsuchen',
			LOOKING_AT_GENRE: 'Ausgewähltes Genre:',
			MARK_COMPLETED: 'Markiere als gesehen',
			NO_TVSHOWS_FOUND: 'Keine Serien verfügbar',
			NO_MOVIES_FOUND: 'Keine Filme verfügbar'
		},
		VIDEO: {
			RELEASED: 'Veröffentlicht',
			IMDB: 'IMDB',
			RATING: 'Bewertung',
			VOTES: 'Stimmen',
			OVERVIEW: 'Überblick',
			GENRE: 'Genre',
			TRAILER: 'Vorschau',
			SEASON: 'Staffel',
			SUBTITLES: 'Untertitel'
		},

		MESSAGES: {
			SHARE_SOCKET: 'Mit dem erstellen einer neuen Sitzung bekommst de eine eindeutige ID, welche du dann an deine Freunde weiterleiten kannst um den Film mit ihnen synchron zu genießen!',
			FILE_MISSING: 'Es gibt ein Problem mit dem Video. Es scheint als sei die dazugehörig Videodatei entfernt worden.',
			CODEC_PROBLEM: 'Es gibt ein Problem beim hinzufügen des Videos zum Player. Dies ist meist ein Kodierungs-Problem. Versuche deine Videos in einen HTML5 fähigen Codec zu konvertieren. Lösche die aktuelle Datei und füge die recodierte hinzu. Wenn der Codec korrekt ist, überprüfe die Error-Logs und die Servereinstellungen.',
			WRONG_BASEPATH: 'Dein Video wird mit einem falschen Basispfad eingefügt. Du besuchst diese Seite über "{{basePath}}". Vergewissere dich, ob der korrekte Basispfad in den Einstellungen hinterlegt ist, und du diesen beim nächsten mal besuchst.'
		},
		MANAGE_CONTENT: 'Inhalte verwalten',
		ADMIN: 'Verwaltung',
		HELP: 'Hilfe',
		HELP_FAQ: 'HILFE / FAQ',
		PROFILE_SETTINGS: 'Profil Einstellungen',
		LOGOUT: 'Ausloggen',
		CHANGE_PASSWORD: 'Passwort ändern',
		LANGUAGE_en: 'English',
		LANGUAGE_de: 'Deutsch',
		LANGUAGE_fr: 'Französisch',
		LANGUAGE_es: 'Spanisch',
		LANGUAGE_kr: 'Koreanisch',
		LANGUAGE_nl: 'Niederländisch',
		LANGUAGE_pt: 'Portugiesisch',

		PROFIlE: {
			USERNAME: 'Benutzername',
			FULL_NAME: 'Vollständiger Name',
			LANGUAGE: 'Sprache',
			PAUSE_ON_CLICK: 'Pausiere Video bei Klick',
			FAVORITE_GENRES: 'Lieblings-Genres',
			SAVE: 'Profil speichern',
			OLD_PASS: 'Altes Passwort',
			NEW_PASS: 'Neues Passwort',
			NEW_PASS_PLACEHOLDER: 'Neues Passwort  (min. 6 Zeichen)',
			REPEAT_PASS: 'Passwort wiederholen',
			SAVE_PASS: 'Neues Passwort setzen'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Zuletzt hinzugefügt',
			OLDEST_ADDED: 'Zuerst hinzugefügt',
			NEWEST_RELEASED: 'Neuste Veröffentlichung',
			OLDEST_RELEASED: 'Älteste Veröffentlichung',
			NEWEST_AIRED: 'Zuletzt ausgestrahlt',
			OLDEST_AIRED: 'Zuerst ausgestrahlt'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'Wie kann ich ein Video hochladen?',
				TEXT: "Du kannst Videos hochladen indem du auf Inhalte verwalten klickst. Wähle aus, ob du eine Serie, einen Film oder ein Video hochladen möchtest. Klicke auf die relevante Option" +
				"auf der linken Seite. Dann klicke auf den Button rechts. Danach öffent sich die Suchleiste, in den du den Titel des Film eingibst. Dies kannst du auch manuell machen, falls keine Vorschläge kommen." +
				"Im Anschluss kannst du das Video mit einer Datei verknüpfen oder eine Datei hochladen."

			},
			DELETE_VIDEO: {
				TITLE: 'Wie kann ich ein Video löschen?',
				TEXT: "Du kannst Videos in der Video Informationsseite löschen, wenn du Inhalte verwalten anklickst und dann auf den roten Mülleimer. Video editieren anklicken und dann Video löschen" +
				" an zu klicken ist ein anderer Weg ein Video zu löschen. Du kannst auch den Filemanager benutzen, der sich im Inhalte Verwalten Menü befindet." +
				" Auch hier den roten Mülleimer verwenden."
			},
			VIDEO_FORMATS: {
				TITLE: 'Welche Video Formate werden unterstützt?',
				TEXT: "Streama unterstützt im Moment nur Formate für den HTML5 player. Du kannst testen ob deine Videodatei HTML5 kompatiebel ist, indem du diese in ein/en leeren " +
				" Browsertab/fenster ziehst und fallen lässt."
			},
			SUBTITLES: {
				TITLE: 'Wie kann ich Untertitel zu Videos hinzufügen?',
				TEXT: "Du kannst Untetertitel in der Videos Infromationsseite unter Inhalte verwalten. Du kannst dort Untetitel durch Drag and Drop hinzufügen." +
				"Die Untertitel müssen nicht mehr konvertiert werden."
			},
			INVITE_USERS: {
				TITLE: 'Wie kann ich Freunde einladen um meine gehosteten Videos an zu schauen?',
				TEXT:"Du kannst deine Videos auf Streama teilen, indem du deine Frende einlädst. Gehe zum Benutzer Menu und klicke auf den Einladen Button. Fülle das Formular aus" +
				" und wähle die Rollen. Benutzer mit der Rolle Admin können Benutzer und Einstellungen ändern. Benutzer mit der Rolle role Content Manager können Inhalte verwalten." +
				" Deine Freunde werden über E-Mail benachrichtigt, dass du Sie eingeladen hast. Du kannst auch Videositzung teilen indem du auf den Teilen Button des Videoplayers drückst und die Sitzungs URL teilst."
			},
			BASE_URL: {
				TITLE: "Was ist die basis URL und wie sollte Sie konfiguriert werden?",
				TEXT: "Die base URL wird für Email Einladungen benutzt."
			},
			NOTIFICATIONS: {
				TITLE: "Was sind Benachrichtigungen?",
				TEXT: "Du kannst deine eingeladenen Freunde über hochgeladene Videos mit Benachrichtigungen informieren. Du kannst diese zur Benachrichtigungswarteschlange hinzufügen, indem du den Benachrichtigungsknopf in der Informationsseite drücken und im Benachrichtungsmenu auf Senden klicken."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "Hat der Player Tastaturkurzbefehle?",
				TEXT: "Ja. Pause/Weiter: Leertaste. Lautstärke: Pfeiltasten hoch oder runter. Videospünge vor/zurück: Pfeiltasten rechts oder links. Langer Sprung:" +
				" Steuerung + Pfeiltasten links oder rechts. Vollbildschirm an/aus: Alt + Enter. Untertitel an/aus: S, Mute: M, Zurück zum vohergehenden Bildschirm" +
				" : Enf oder Rücktaste."
			},
			FAVORITE_GENRES: {
				TITLE: "Wie beeinflussen die Lieblings-Genres des Nutzers Streama?",
				TEXT: "Kommt bald..."
			},
			USEFUL_LINKS: {
				TITLE: "Nützliche links",
				TEXT: "Kommt bald..."
			}
		}
	});
}]);
/**
 * Created by antonia on 14/05/16.
 */
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		LOGIN: {
			TITLE: 'Please Login',
			USERNAME: 'Username',
			PASSWORD: 'Password',
			FIRST_TIME_HINT: 'First time logging in? Try \'admin\' for both fields.',
			SUBMIT: 'Login'
		},
		DASHBOARD: {
			TITLE: 'Dashboard',
			NEW_RELEASES: 'New Releases',
			CONTINUE_WATCHING: 'Continue Watching',
			DISCOVER_SHOWS: 'Discover Shows',
			DISCOVER_MOVIES: 'Discover Movies',
			DISCOVER_OTHER_VIDEOS: 'Discover other videos',
			SORT: 'Sort:',
			SEARCH_BY_NAME: 'Search by Name...',
			FILTER_BY_TAG: 'Filter by Tag...',
			BROWSE_GENRES: 'Browse',
			LOOKING_AT_GENRE: 'You\'re looking at the genre:',
			MARK_COMPLETED: 'Mark completed',
			NO_TVSHOWS_FOUND: 'No Tv-Shows Available',
			NO_MOVIES_FOUND: 'No Movies Available'
		},
		VIDEO: {
			RELEASED: 'Released',
			IMDB: 'IMDB',
			RATING: 'Rating',
			VOTES: 'Votes',
			OVERVIEW: 'Overview',
			GENRE: 'Genre',
			TRAILER: 'Trailer',
			SEASON: 'Season',
			SUBTITLES: 'Subtitles',
			NO_SUBTITLE: 'No Subtitle'
		},

		MESSAGES: {
			SHARE_SOCKET: 'By creating a new session you will be redirected back to this player, but this time you will have a unique session ID in the url. Share this with your friends to have a synchronized watching experience with them!',
			FILE_MISSING: 'There is a problem with this content. It seems you removed the associated video file from it.',
			CODEC_PROBLEM: 'There seems to be a problem adding the video-file to the player. This is most likely due to a codec-problem. Try converting it to a compatible HTML5 codec, remove the currently attached file and re-add it. If the codecs are fine, check the error log of the server and the base URL in the settings.',
			WRONG_BASEPATH: 'You video get\'s included using the wrong Base Path, but you are browsing the page via "{{basePath}}". Make sure you set the correct Base Path in the settings and that you are using it to browse the application.',
			FILE_IN_FS_NOT_FOUND: 'Your video cannot be found in any of the locations available to the application. Please check your settings and your file system to make sure that the files are accessible by the application.'
		},
		MANAGE_CONTENT: 'Manage Content',
		ADMIN: 'Admin',
		HELP: 'Help',
		HELP_FAQ: 'HELP / FAQ',
		PROFILE_SETTINGS: 'Profile Settings',
		LOGOUT: 'Logout',
		CHANGE_PASSWORD: 'Change Password',
		LANGUAGE_en: 'English',
		LANGUAGE_de: 'German',
		LANGUAGE_fr: 'French',
		LANGUAGE_es: 'Spanish',
		LANGUAGE_kr: 'Korean',
		LANGUAGE_nl: 'Dutch',
		LANGUAGE_pt: 'Portuguese',

		PROFIlE: {
			USERNAME: 'Username',
			FULL_NAME: 'Full Name',
			LANGUAGE: 'Language',
			PAUSE_ON_CLICK: 'Pause Video on Click',
			FAVORITE_GENRES: 'Favorite Genres',
			SAVE: 'Save Profile',
			PASS: 'Password',
			OLD_PASS: 'Old Password',
			NEW_PASS: 'New Password',
			NEW_PASS_PLACEHOLDER: 'New Password  (min. 6 Characters)',
			REPEAT_PASS: 'Repeat Password',
			PASS_ERROR_EMPTY: 'The password can not be empty',
			PASS_ERROR_LENGTH: 'The password must be at least 6 characters long',
			PASS_ERROR_REPEAT: 'The passwords need to match'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Most Recently Added',
			OLDEST_ADDED: 'First Added',
			NEWEST_RELEASED: 'Latest Release',
			OLDEST_RELEASED: 'Oldest Release',
			NEWEST_AIRED: 'Most Recently Aired',
			OLDEST_AIRED: 'Oldest Air-Date'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'How can I upload a video?',
				TEXT: "You can upload videos by going to Manage Content menu. Choose if you want to upload a Movie, TV show or Other video. Click the relevant sub-menu option" +
				" on the vertical navigation bar on the left side of the screen. You can upload a video by clicking the Create New Movie/TV Show/Other Video button or by typing" +
				" the name of the video you want to upload to the search bar and selecting the relevant movie from search results. After that, you can choose to fill in the video's" +
				" information either manually or loading its information from TheMovieDB. After that, you can upload the video and subtitle files by clicking Manage Files button."
			},
			DELETE_VIDEO: {
				TITLE: 'How can I delete a video?',
				TEXT: "You can delete a video by going to the video's information page and clicking Manage Files and selecting the red trash can icon. Clicking Edit Movie and selecting" +
				" Delete Movie is another way to do it. You can also use the File Manager which is in the Manage Content menu. You can see all the files you have uploaded there. Click" +
				" the red trash can icon to delete a file."
			},
			VIDEO_FORMATS: {
				TITLE: 'Which video formats are supported?',
				TEXT: "Streama supports currently only the video file formats supported by HTML5 player. You can test if your video file is HTML5 player compatible by dragging and dropping" +
				" your file to an empty tab on your browser."
			},
			SUBTITLES: {
				TITLE: 'How can I add subtitles to videos?',
				TEXT: "You can add subtitles to videos by clicking Manage Files button which is in the video's information page. You can drag and drop subtitle files there." +
				" Previously you had to manually convert them into a compatible file format, but not anymore! Now the application handles that for you."
			},
			INVITE_USERS: {
				TITLE: 'How can I invite friends to watch my hosted videos?',
				TEXT:"You can share your videos with your friends by inviting them to use your hosted Streama. Go to the Users menu and click Invite User button. Fill in the invite form and" +
				" select the invitee's role(s). Users with the role Admin can edit Users & Settings. Users with the role Content Manager can edit content. Your friend will be notified about" +
				" the invitation via email. You can also share video sessions with your friends by clicking the video player's Share button and linking the session URL to them."
			},
			BASE_URL: {
				TITLE: "What's the base URL and how should I configure it?",
				TEXT: "The Base-URL is used for the videos and the link in the invitation-email."
			},
			NOTIFICATIONS: {
				TITLE: "What are notifications?",
				TEXT: "You can notify your invited friends about uploaded videos by sending them notification messages. You can send them by adding them your notification queue by clicking" +
				" Add Notification button which is in your video's information page and going to the Notifications menu and clicking Send Queue button."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "Does the video player have shortcut keys?",
				TEXT: "Yes. Pause/unpause: space. Manage volume: arrow keys up or down. Skip video forward/backward: arrow keys left or right. Long skip:" +
				" control + arrow keys left or right. Fullscreen on/off: alt + enter. Subtitles on/off: S, Mute: M, Return to previous" +
				" screen: delete or backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "How do user's favorite genres affect Streama?",
				TEXT: "Coming soon..."
			},
			USEFUL_LINKS: {
				TITLE: "Useful links",
				TEXT: "Coming soon..."
			}
		}
	});
}]);
/**
 * Created by antonia on 14/05/16.
 */
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('es', {
		LOGIN: {
			TITLE: 'Introduzca su usuario',
			USERNAME: 'Usuario',
			PASSWORD: 'Contraseña',
			FIRST_TIME_HINT: '¿Es tu primera vez? Prueba \'admin\' en ambos campos.',
			SUBMIT: 'Identificarse',
		},
		DASHBOARD: {
			TITLE: 'Panel de control',
			NEW_RELEASES: 'Nuevas Publicaciones',
			CONTINUE_WATCHING: 'Continuar Viendo',
			DISCOVER_SHOWS: 'Descubrir Shows',
			DISCOVER_MOVIES: 'Descubrir Películas',
			DISCOVER_OTHER_VIDEOS: 'Descubrir otros vídeos',
			SORT: 'Ordenar:',
			SEARCH_BY_NAME: 'Buscar por Nombre...',
			FILTER_BY_TAG: 'Filtrar por Etiqueta...',
			BROWSE_GENRES: 'Buscar',
			LOOKING_AT_GENRE: 'Estás viendo el género:',
			MARK_COMPLETED: 'Marca Completada',
			NO_TVSHOWS_FOUND: 'No hay Shows de TV Disponibles',
			NO_MOVIES_FOUND: 'No hay Películas Disponibles',
		},
		VIDEO: {
			RELEASED: 'Publicado',
			IMDB: 'IMDB',
			RATING: 'Puntuación',
			VOTES: 'Votos',
			OVERVIEW: 'Sinopsis',
			GENRE: 'Género',
			TRAILER: 'Trailer',
			SEASON: 'Temporada',
			SUBTITLES: 'Subtítulos'
		},

		MESSAGES: {
			SHARE_SOCKET: 'Creando una sesión nueva, seras redirigido de vuelta a este reproductor, pero esta vez tendrás un código de sesión único en la URL. ¡Comparte éste enlace con tus amigos para tener una experiencia de visión sincronizada con ellos!',
			FILE_MISSING: 'Hay un problema con este contenido. Parece que has eliminado el archivo asociado al mismo.',
			CODEC_PROBLEM: 'Parece que hay un problema añadiendo el archivo de vídeo al reproductor. La causa suele ser debida a un problema con los códecs. Prueba convirtiéndolo a un códec HTML5 compatible, elimina el fichero adjunto, y añádelo de nuevo. Si los códecs son los correctos, comprueba el registro del servidor y la URL en las opciones.',
			WRONG_BASEPATH: 'Tu vídeo ha sido incluido usando una ruta incorrecta, pero estás accediendo a la página a traves de la ruta "{{basePath}}". Asegúrate de escribir la ruta correcta en las propiedades y de que estás usándola para acceder a la aplicación.',
		},
		MANAGE_CONTENT: 'Gestionar Contenido',
		ADMIN: 'Admin',
		HELP: 'Ayuda',
		HELP_FAQ: 'Ayuda / Preguntas Frecuentes',
		PROFILE_SETTINGS: 'Opciones de Perfil',
		LOGOUT: 'Salir',
		CHANGE_PASSWORD: 'Cambiar Contraseña',
		LANGUAGE_en: 'Inglés',
		LANGUAGE_de: 'Alemán',
		LANGUAGE_fr: 'Erancés',
		LANGUAGE_es: 'Español',
		LANGUAGE_kr: 'Coreano',
		LANGUAGE_nl: 'Holandés',
		LANGUAGE_pt: 'Portugués',

		PROFIlE: {
			USERNAME: 'Nombre de usuario',
			FULL_NAME: 'Nombre completo',
			LANGUAGE: 'Idioma',
			PAUSE_ON_CLICK: 'Haz click para pausar',
			FAVORITE_GENRES: 'Géneros Favoritos',
			SAVE: 'Guardar Perfil',
			OLD_PASS: 'Antigua Contraseña',
			NEW_PASS: 'Nueva Contraseña',
			NEW_PASS_PLACEHOLDER: 'Nueva Contraseña  (min. 6 Caracteres)',
			REPEAT_PASS: 'Repite tu Contraseña',
			SAVE_PASS: 'Guardar Nueva Contraseña',
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Añadidos Recientemente',
			OLDEST_ADDED: 'Añadidos Primero',
			NEWEST_RELEASED: 'Últimos Publicados',
			OLDEST_RELEASED: 'Primeros Publicados',
			NEWEST_AIRED: 'Transmitidos Recientemente',
			OLDEST_AIRED: 'Transmitidos Primero',
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: '¿Cómo puedo subir un vídeo?',
				TEXT: "Puedes subir un vídeo accediendo al menú Gestionar Contenido. Elige si quieres subir una Película, un Show de TV o cualquier otro vídeo. Haz click en la opción correspondiente del menú" +
				" vertical en el lateral izquierdo de la aplicación. Puedes subir un vídeo haciendo click en el botón de Crear Nueva Película/Show de TV/Otro o escribiendo" +
				" el nombre del vídeo que quieres subir en la barra de búsqueda y seleccionando la película deseada de entre los resultados. Después de eso, puedes elegir rellenar la información del vídeo" +
				" manualmente o cargar la información desde TheMovieDB automáticamente. Posteriormente, puedes subir el vídeo y los archivos de subtítulos pulsando sobre el botón Gestionar Archivos."
			},
			DELETE_VIDEO: {
				TITLE: '¿Cómo puedo borrar un vídeo?',
				TEXT: "Puedes borrar un vídeo yendo a la página de información de dicho video, haciendo click en Gestionar Archivos y seleccionando el icono de una papelera roja. Otra manera es haciendo click en Editar Película" +
				" y seleccionando Borrar película. También puedes usar el Gestor de Archivos que se encuentra en el menú de Gestionar Contenido. De ésta manera puedes ver todos los archivos subidos. Haz click en Click" +
				" en el icono de la papelera roja para eliminar un fichero."
			},
			VIDEO_FORMATS: {
				TITLE: '¿Qué formatos de vídeo están soportados?',
				TEXT: "Streama soporta actualmente solo aquellos formatos de vídeo soportados por el reproductor HTML5. Puedes comprobar si un archivo de vídeo es compatible con HTML5 arrastrándolo" +
				" a una pestaña vacía de tu navegador."
			},
			SUBTITLES: {
				TITLE: '¿Cómo puedo añadir subtítulos a un vídeo?',
				TEXT: "Puedes añadir subtítulos a los vídeos haciendo click en el botón Gestionar Archivos que se encuentra en la página de información del vídeo. Arrastra los archivos ahí." +
				" Antiguamente teníamos que convertirlos manualmente a un formato de archivo compatible, ¡pero ya no! Ahora la aplicación se encarga de ello por ti."
			},
			INVITE_USERS: {
				TITLE: '¿Cómo puedo invitar a mis amigos a ver mis vídeos?',
				TEXT:"Puedes compartir tus vídeos con tus amigos invitándoles a usar tu Streama. Ve al menú de Usuarios y haz click en el botón de Invitar Usuario. Rellena el formulario de invitación y" +
				" selecciona el rol del invitado. Los usuarios con el rol de Administradores pueden editar Usuarios y Configuraciones. Los usuarios con el rol de Gestor de Contenido pueden editar el contenido. Tu amigo será notificado" +
				" a través de su correo electrónico. También puedes compartir una sesión de vídeo con tus amigos haciendo click sobre el botón Compartir del reproductor y enviándoles el enlace correspondiente."
			},
			BASE_URL: {
				TITLE: "¿Qué es la URL base y cómo debería configurarla?",
				TEXT: "LA URL base se utiliza en los vídeos y en los enlaces que se envían en las invitaciones por correo."
			},
			NOTIFICATIONS: {
				TITLE: "¿Qué son las notificaciones?",
				TEXT: "Puedes notificar a los amigos que invites mandándoles mensajes de notificación. Puedes enviarlas añadiéndolas a la cola de notificaciones haciendo click en" +
				" el botón de Añadir Notificación que se encuentra en la página de información del vídeo y accediendo al menú de Notificaciones y clickando en el botón de Enviar Cola."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "¿El reproductor tiene teclas de acceso rápido?",
				TEXT: "Si. Pausar/Continuar: espacio. Controlar el volúmen: flechas de arriba y abajo. Avanzar el vídeo adelante/atrás: flechas de derecha e izquierda. Salto grande:" +
				" control + flechas de derecha e izquierda. Pantalla completa on/off: alt + enter. Subtítulos on/off: S, Silenciar: M, Volver a la anterior" +
				" pantalla: delete o backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "¿Cómo afectan a Streama los géneros favoritos del usuario?",
				TEXT: "Próximamente..."
			},
			USEFUL_LINKS: {
				TITLE: "Enlaces útiles",
				TEXT: "Próximamente..."
			},
		}
	});
}]);
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('fr', {
		LOGIN: {
			TITLE: 'Veuillez vous connecter',
			USERNAME: 'Nom d\'utilisateur',
			PASSWORD: 'Mot de passe',
			FIRST_TIME_HINT: 'Première connexion ? Connectez-vous avec \'admin\'/\'admin\'.',
			SUBMIT: 'Connexion'
		},
		DASHBOARD: {
			TITLE: 'Tableau de bord',
			NEW_RELEASES: 'Nouvelles sorties',
			CONTINUE_WATCHING: 'Continuer le visionnage',
			DISCOVER_SHOWS: 'Découvrez des séries',
			DISCOVER_MOVIES: 'Découvrez des films',
			DISCOVER_OTHER_VIDEOS: 'Découvrez d\'autres vidéos',
			SORT: 'Tri :',
			SEARCH_BY_NAME: 'Chercher par nom...',
			FILTER_BY_TAG: 'Chercher par tag...',
			BROWSE_GENRES: 'Parcourir',
			LOOKING_AT_GENRE: 'Vous regardez le genre :',
			MARK_COMPLETED: 'Marquer comme fini',
			NO_TVSHOWS_FOUND: 'Aucune série disponible',
			NO_MOVIES_FOUND: 'Aucun film disponible'
		},
		VIDEO: {
			RELEASED: 'Sorti',
			IMDB: 'IMDB',
			RATING: 'Note',
			VOTES: 'Votes',
			OVERVIEW: 'Résumé',
			GENRE: 'Genre',
			TRAILER: 'Bande annonce',
			SEASON: 'Saison',
			SUBTITLES: 'Sous-titres'
		},

		MESSAGES: {
			SHARE_SOCKET: 'En créant une nouvelle session, vous serez rediriger vers ce lecteur vidéo avec un identifiant de session unique dans l\'adresse. Partagez cette adresse avec vos amis pour regarder une vidéo de façon synchronisée !',
			FILE_MISSING: 'Il y\'a un problème avec ce contenu. Il semblerait que vous ayez supprimé le fichier vidéo associé.',
			CODEC_PROBLEM: 'Il semblerait qu\'il y ai un problème pour lire ce fichier. Cela est probablement dû à un problème de codec. Essayez de convertir votre vidéo en un format compatible HTML5, supprimez le fichier actuellement attaché et réajoutez le. Si le codec est bon, vérifier les logs d\'erreur sur le serveur et l\'URL racine dans les paramètres.',
			WRONG_BASEPATH: 'Votre vidéo a été ajouté avec un mauvais chemin racine, mais vous naviguez en utilisant "{{basePath}}". Vérifiez que le chemin racine est correct dans les paramètres et qu\'il correspond bien à l\'URL que vous utilisez pour naviguer cette application.'
		},
		MANAGE_CONTENT: 'Gérer le contenu',
		ADMIN: 'Paramètres',
		HELP: 'Aide',
		HELP_FAQ: 'Aide / FAQ',
		PROFILE_SETTINGS: 'Paramètres du profil',
		LOGOUT: 'Déconnexion',
		CHANGE_PASSWORD: 'Modifier le mot de passe',
		LANGUAGE_en: 'Angais',
		LANGUAGE_de: 'Allemand',
		LANGUAGE_fr: 'Français',
		LANGUAGE_es: 'Espagnol',
		LANGUAGE_kr: 'Coréen',
		LANGUAGE_nl: 'Néerlandais',
		LANGUAGE_pt: 'Portugais',

		PROFIlE: {
			USERNAME: 'Nom d\'utilisateur',
			FULL_NAME: 'Nom complet',
			LANGUAGE: 'Langue',
			PAUSE_ON_CLICK: 'Mettre la vidéo en pause au clic',
			FAVORITE_GENRES: 'Genres favoris',
			SAVE: 'Enregistrer le profil',
			OLD_PASS: 'Ancien mot de passe',
			NEW_PASS: 'Nouveau mot de passe',
			NEW_PASS_PLACEHOLDER: 'Nouveau mot de pass (min. 6 caractères)',
			REPEAT_PASS: 'Répétez le mot de passe',
			SAVE_PASS: 'Enregistrer le nouveau mot de passe'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Ajoutés récemment',
			OLDEST_ADDED: 'Premiers ajoutés',
			NEWEST_RELEASED: 'Dernières sorties',
			OLDEST_RELEASED: 'Premières sorties',
			NEWEST_AIRED: 'Dernières sorties',
			OLDEST_AIRED: 'Premières sorties'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'Comment ajouter une vidéo ?',
				TEXT: "Vous pouvez ajouter une vidéo en allant dans le menu Gérer le contenu. Choisissez si vous voulez ajouter un film, une série ou une autre vidéo. Cliquez sur le sous-menu correspondant" +
				" dans la barre de navigation verticale sur le coté gauche de l'écran. Vous pouvez ajouter une vidéo en cliquant sur le bouton Créer un film/série/autre vidéo ou en tapant" +
				" le nom de la vidéo que vous voulez ajouter dans la barre de recherche et en sélectionnant le film correspondant dans les résultats de recherche. Ensuite, vous pouvez choisir de renseigner les informations" +
				" sur la vidéo soit manuellement soit en chargeant les informations de TheMovieDB. Finalement, vous pouvez ajouter la vidéo et les sous-titres en cliquant sur le bouton Gérer les fichiers."
			},
			DELETE_VIDEO: {
				TITLE: 'Comment supprimer une vidéo ?',
				TEXT: "Vous pouvez supprimer une vidéo en allant sur la page des les informations d'une vidéo et en cliquant sur Gérer les fichiers puis en sélectionnant l'icône de corbeille rouge. Cliquer sur Modifier un film et sélectionner Supprimer le film" +
				" est un autre moyen. Vous pouvez également utiliser le Gestionnaire de fichiers dans le menu Gérer le contenu. Vous pouvez voir tous les fichiers ajoutés ici. Cliquez" +
				" sur l'icône de corbeille rouge pour supprimer un fichier."
			},
			VIDEO_FORMATS: {
				TITLE: 'Quels formats vidéos sont supportés ?',
				TEXT: "Streama supporte actuellement seulement les formats vidéos supportés par le lecteur HTML5. Vous pouvez tester si votre fichier vidéo est compatible HTML5 en le glissant déplaçant dans un onglet vide" +
				" de votre navigateur."
			},
			SUBTITLES: {
				TITLE: 'Comment ajouter des sous-titres à une vidéo ?',
				TEXT: "Vous pouvez ajouter des sous-titres aux vidéos en cliquant sur le bouton Gérer les fichiers situé dans la page d'information de la vidéo. Vous pouvez glisser déplacer les fichiers de sous-titres ici." +
				" Précedemment, vous deviez les convertir dans un format compatible, mais ce n'est plus nécessaire ! L'application s'en charge pour vous."
			},
			INVITE_USERS: {
				TITLE: 'Comment inviter un ami à voir mes vidéos ?',
				TEXT:"Vous pouvez partager vos vidéos avec vos amis en les invitant sur votre Streama. Allez dans le menus Utilisateurs et cliquer sur le bouton Inviter un utilisateur. Remplissez le formulaire d'invitation et" +
				" sélectionner le/les rôle(s) de l'invité. Les utilisateurs avec le rôle Administateur peuvent modifier les utilisateurs et les paramètres. Les utilisateurs avec le rôle Gestionnaire de contenu peuvent modifier le contenu. Votre ami sera notifié de l'invitation" +
				" par email. Vous pouvez également partager une session vidéo avec vos amis en cliquant sur le bouton Partager sur le lecteur vidéo et en leur envoyant le lien vers la session."
			},
			BASE_URL: {
				TITLE: "Quelle est l\'URL racine et comment doit-je la configurer ?",
				TEXT: "L\'URL racine est utilisée pour les vidéos et les liens dans les e-mails d'invitation."
			},
			NOTIFICATIONS: {
				TITLE: "Que sont les notifications ?",
				TEXT: "Vous pouvez notifier vos amis à propos de vidéos ajoutées en leur envoyant un message de notification. Vous pouvez les envoyer en les ajoutant dans votre liste de notification en cliquant" +
				" sur le bouton Ajouter une notification sur la page d'information de la vidéo puis en allant dans le menu des notifications et en cliquant sur le bouton Envoyer la liste."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "Est-ce que le lecteur vidéo a des raccourcis clavier ?",
				TEXT: "Oui. Pause/reprendre : espace. Modifier le volume : Flèche haut/bas. Vidéo suivante/précédente : Flèche gauche/droite. Avance rapide :" +
				" Ctrl + flèche gauche/droite. Plein écran oui/non : Alt + Entrée. Sous-titres oui/non : S, Muet : M, Retour à l'écran précédent" +
				" : Suppr ou Retour."
			},
			FAVORITE_GENRES: {
				TITLE: "En quoi les genres favoris d'un utilisateur affectent Streama ?",
				TEXT: "A venir..."
			},
			USEFUL_LINKS: {
				TITLE: "Liens utiles",
				TEXT: "A venir..."
			}
		}
	});
}]);
/**
 * Created by antonia on 14/05/16.
 * Translation by @imkimchi on 16/05/16
 */
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('kr', {
		LOGIN: {
			TITLE: '로그인이 필요합니다.',
			USERNAME: '아이디',
			PASSWORD: '비밀번호',
			FIRST_TIME_HINT: '처음 로그인 하시나요? \'admin\'를 입력해보세요!',
			SUBMIT: '로그인',
		},
		DASHBOARD: {
			TITLE: '대시보드',
			NEW_RELEASES: '신작',
			CONTINUE_WATCHING: '계속해서 보기',
			DISCOVER_SHOWS: '드라마 찾기',
			DISCOVER_MOVIES: '영화 찾기',
			DISCOVER_OTHER_VIDEOS: '다른 영상들을 찾아보기',
			SORT: '정렬:',
			SEARCH_BY_NAME: '제목으로 찾아보기...',
			FILTER_BY_TAG: '태그로 찾아보기...',
			BROWSE_GENRES: '장르 탐색',
			LOOKING_AT_GENRE: '장르를 보고있습니다.',
			MARK_COMPLETED: '선택 완료',
			NO_TVSHOWS_FOUND: '해당 드라마를 찾지 못했습니다.',
			NO_MOVIES_FOUND: '해당 영화를 찾지 못했습니다.',
		},
		VIDEO: {
			RELEASED: '출시',
			IMDB: 'IMDB',
			RATING: '평점',
			VOTES: '투표',
			OVERVIEW: '줄거리',
			GENRE: '장르',
			TRAILER: '트레일러',
			SEASON: '시즌',
			SUBTITLES: '자막'
		},

		MESSAGES: {
			SHARE_SOCKET: '새로운 세션을 만들면 이 플레이어로 다시 돌아오지만, 지금은 URL에 유니크 세션 ID가 있습니다. 세션 ID를 친구들과 공유해서 동시에 시청해보세요!',
			FILE_MISSING: '비디오 파일이 찾을 수 없습니다. 친구들과 공유해서 동시에 시청해보세요!',
			CODEC_PROBLEM: '비디오 파일을 플레이어에 추가하는데 문제가 발생했습니다. 코덱의 문제일 가능성이 높습니다. 호환 가능한 HTML5 코덱으로 변경하고, 현재 파일을 삭제하고 다시 추가해보세요. 만약 코덱에 문제가 없다면 환경설정에서 에러 로그와 base URL를 확인해보세요.',
			WRONG_BASEPATH: '잘못된 경로입니다, 현재 페이지는 "{{basePath}}" 입니다. 올바른 경로로 설정해주세요.',
		},
		MANAGE_CONTENT: '컨텐츠 관리',
		ADMIN: '관리자',
		HELP: '도움',
		HELP_FAQ: '도움 / 질문',
		PROFILE_SETTINGS: '프로필 설정',
		LOGOUT: '로그아웃',
		CHANGE_PASSWORD: '비밀번호 변경',
		LANGUAGE_en: '영어',
		LANGUAGE_de: '독일어',
		LANGUAGE_fr: '프랑스의',
		LANGUAGE_es: '스페인어',
		LANGUAGE_kr: '한국어',
		LANGUAGE_nl: '네덜란드',
		LANGUAGE_pt: '포르투갈어',

		PROFIlE: {
			USERNAME: '아이디',
			FULL_NAME: '이름',
			LANGUAGE: '언어',
			PAUSE_ON_CLICK: '클릭해서 재생을 멈춥니다.',
			FAVORITE_GENRES: '좋아하는 장르',
			SAVE: '저장',
			OLD_PASS: '기존 비밀번호',
			NEW_PASS: '새 비밀번호',
			NEW_PASS_PLACEHOLDER: '새 비밀번호 (최소 6글자)',
			REPEAT_PASS: '비밀번호 재입력',
			SAVE_PASS: '새 비밀번호 설정',
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: '최근 추가된 순',
			OLDEST_ADDED: '늦게 추가된 순',
			NEWEST_RELEASED: '최근 출시된 순 ',
			OLDEST_RELEASED: '늦게 출시된 순',
			NEWEST_AIRED: '최근에 방영된 순',
			OLDEST_AIRED: '늦게 방영된 순 ',
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: '비디오를 어떻게 업로드 하나요?',
				TEXT: "컨텐츠 관리 메뉴에서 비디오를 업로드 할 수 있습니다. 영화, 드라마, 영상를 업로드할건지 선택해주세요. 하위 메뉴를 클릭하세요." +
				" 화면 좌측에 있는 네비게이션 바. 새로운 영화/드라마/영상 버튼을 클릭하거나 입력해서 동영상을 업로드 할 수 있습니다" +
				" 검색 창에서 업로드 하고 싶은 동영상을 검색하세요. 검색 결과중에 원하는 영화를 클릭하면 동영상 리스트에 추가할 수 있습니다." +
				" TheMovieDB 또는 로컬 파일을 파일 관리 버튼을 클릭해서 동영상과 자막 파일을 추가할 수 있습니다."
			},
			DELETE_VIDEO: {
				TITLE: '비디오를 어떻게 삭제 하나요?',
				TEXT: "비디오 정보 페이지 -> 파일 관리 -> 빨간색 휴지통 아이콘 -> 영화 수정 -> 선택" +
				" 영화 삭제 를 통해 삭제 할 수 있습니다. 컨텐츠 관리 메뉴에 있는 파일 관리자를 사용해서 삭제할 수도 있습니다. 파일 관리자로 업로드한 영상들을 모두 확인할 수 있습니다." +
				" 빨간 휴지통 아이콘을 클릭해서 삭제하세요."
			},
			VIDEO_FORMATS: {
				TITLE: '어떤 동영상 포맷을 지원하나요?',
				TEXT: "Streama는 HTML5 플레이어가 지원하는 형식의 동영상 포맷만 지원합니다. 빈 창에 동영상을 드래그 앤 드랍을 통해 HTML5 플레이어와 호환이 되는지 확인할 수 있습니다."
			},
			SUBTITLES: {
				TITLE: '자막을 어떻게 추가 할 수 있나요?',
				TEXT: "비디오 정보 페이지에 있는 파일 관리자를 클릭해서 동영상에 자막을 추가할 수 있습니다. 드래그 앤 드랍을 통해서 추가할 수 도 있습니다." +
				" 이전에는 수동으로 파일 형식을 호환 가능한 파일 형식으로 변환해야했지만 Streama가 대신 해드립니다!"
			},
			INVITE_USERS: {
				TITLE: '내가 추가한 동영상을 친구들이 볼 수있도록 할 수있나요?',
				TEXT:" Streama를 통해 친구들을 초대하여 친구들에게 동영상을 공유할 수있습니다. 유저 메뉴에서 유저 초대 버튼을 클릭하세요. 초대 리스트를 작성하고" +
				" 초대하려는 친구의 권한을 설정하세요. 관리자 권한을 가진 유저는 유저 & 설정을 변경할 수 있습니다. 파일 관리자 권한을 가진 유저는 파일을 변경할 수 있습니다. 초대가 된 이후에, 당신의 친구들에게 이메일로 알람이 갑니다." +
				" 비디오 플레이어의 공유 버튼을 클릭한 후, 링크를 공유해서 친구들에게 동영상을 공유할 수도 있습니다."
			},
			BASE_URL: {
				TITLE: "Base URL이 어떤 것이고 어떻게 설정할 수 있나요?",
				TEXT: "Base-URL 은 동영상과 초대 이메일의 링크로 쓰입니다."
			},
			NOTIFICATIONS: {
				TITLE: "알람들이 뭔가요?",
				TEXT: "초대된 친구들한테 업로드 된 영상을 알릴 수 있습니다. 비디오 정보 페이지 -> 알람 -> 대기열 전송을 클릭 해서 알람 대기열에 추가 시킬 수 있습니다."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "단축키가 있나요?",
				TEXT: "정지: space. 볼륨 조절: 방향키 위/아래. 동영상 건너뛰기: 단축키 우측/좌측. 길게 건너뛰기:" +
				" control + 방향키 좌측/우측. 전체화면 on/off: alt + enter. 자막 on/off: S, 음소거: M, 뒤로가기" +
				" screen: delete키 혹은 backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "유저의 장르 취향이 Stream에 어떤 영향을 주나요?",
				TEXT: "Coming soon..."
			},
			USEFUL_LINKS: {
				TITLE: "유용한 링크",
				TEXT: "Coming soon..."
			},
		}
	});
}]);
/**
 * Created by antonia on 14/05/16.
 * Translated by Steyn Guelen on 15/05/16.
 */
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('nl', {
		LOGIN: {
			TITLE: 'Graag inloggen',
			USERNAME: 'Gebruikersnaam',
			PASSWORD: 'Wachtwoord',
			FIRST_TIME_HINT: 'Eerste keer inloggen? Probeer \'admin\' voor gebruikersnaam en wachtwoord.',
			SUBMIT: 'Login',
		},
		DASHBOARD: {
			TITLE: 'Dashboard',
			NEW_RELEASES: 'Nieuw uitgebracht',
			CONTINUE_WATCHING: 'Verder kijken',
			DISCOVER_SHOWS: 'Ontdek series',
			DISCOVER_MOVIES: 'Ontdek films',
			DISCOVER_OTHER_VIDEOS: 'Ontdek andere videos.',
			SORT: 'Sorteer op',
			SEARCH_BY_NAME: 'Zoek met naam...',
			FILTER_BY_TAG: 'Filter op tag...',
			BROWSE_GENRES: 'Verken',
			LOOKING_AT_GENRE: 'Je zoekt op genre',
			MARK_COMPLETED: 'Markeer als bekeken',
			NO_TVSHOWS_FOUND: 'Geen series beschikbaar',
			NO_MOVIES_FOUND: 'Geen films beschikbaar',
		},
		VIDEO: {
			RELEASED: 'Uitgebracht op',
			IMDB: 'IMDB',
			RATING: 'Waardering',
			VOTES: 'Aantal stemmen',
			OVERVIEW: 'Overzicht',
			GENRE: 'Genre',
			TRAILER: 'Trailer',
			SEASON: 'Seizoen',
			SUBTITLES: 'Ondertitels'
		},

		MESSAGES: {
			SHARE_SOCKET: 'By creating a new session you will be redirected back to this player, but this time you will have a unique session ID in the url. Share this with your friends to have a syncronized watching experience with them!',
			FILE_MISSING: 'Er is een probleem met deze video. Het lijkt erop dat het bestand verwijderd is. Deel dit met je vrienden om een tegelijkertijd te kijken!',
			CODEC_PROBLEM: 'Het lijkt er op dat er een probleem is met het toevoegen van het bestand. Dit komt waarschijnlijk door een verkeerde codec. Converteer het bestand naar een HTML5-codec, verwijder het huidige bestand en probeer het nieuwe bestand opnieuw toe te voegen. Is de codec wel geschikt? Check de server log en Base URL.',
			WRONG_BASEPATH: 'You video get\'s included using the wrong Base Path, but you are browsing the page via "{{basePath}}". Make sure you set the correct Base Path in the settings and that you are using it to browse the application.',
		},
		MANAGE_CONTENT: 'Beheer content',
		ADMIN: 'Administrator',
		HELP: 'Help',
		HELP_FAQ: 'HELP/FAQ',
		PROFILE_SETTINGS: 'Profiel instellingen',
		LOGOUT: 'Uitloggen',
		CHANGE_PASSWORD: 'Wachtwoord wijzigen',
		LANGUAGE_en: 'Engels',
		LANGUAGE_de: 'Duits',
		LANGUAGE_fr: 'Frans',
		LANGUAGE_es: 'Spaans',
		LANGUAGE_kr: 'Koreaans',
		LANGUAGE_nl: 'Nederlands',
		LANGUAGE_pt: 'Portugees',

		PROFIlE: {
			USERNAME: 'Gebruikersnaam',
			FULL_NAME: 'Volledige naam',
			LANGUAGE: 'Taal',
			PAUSE_ON_CLICK: 'Pauzeer video met klik',
			FAVORITE_GENRES: 'Favoriete Genres',
			SAVE: 'Opslaan',
			OLD_PASS: 'Oud wachtwoord',
			NEW_PASS: 'Nieuw wachtwoord',
			NEW_PASS_PLACEHOLDER: 'Nieuw wachtwoord (minimaal 6 karakters',
			REPEAT_PASS: 'Herhaal wachtwoord',
			SAVE_PASS: 'Opslaan',
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Meest recent toegevoegd',
			OLDEST_ADDED: 'Als eerste toegevoegd',
			NEWEST_RELEASED: 'Laatst uitgebracht',
			OLDEST_RELEASED: 'Als eerste uitgebracht',
			NEWEST_AIRED: 'Meest recent uitgezonden',
			OLDEST_AIRED: 'Als eerste uitgezonden',
		}
	});
}]);
/**
 * Created by antonia on 14/05/16.
 */
angular.module('streama.translations').config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('pt', {
		LOGIN: {
			TITLE: 'Faça Login',
			USERNAME: 'Usuário',
			PASSWORD: 'Senha',
			FIRST_TIME_HINT: 'Primeira vez fazendo login? Tente \'admin\' nos dois campos.',
			SUBMIT: 'Login'
		},
		DASHBOARD: {
			TITLE: 'Painel',
			NEW_RELEASES: 'Novos lançamentos',
			CONTINUE_WATCHING: 'Continue assistindo',
			DISCOVER_SHOWS: 'Descubra séries',
			DISCOVER_MOVIES: 'Descubra filmes',
			DISCOVER_OTHER_VIDEOS: 'Descubra outros vídeos',
			SORT: 'Ordenar:',
			SEARCH_BY_NAME: 'Pesquisar por Nome...',
			FILTER_BY_TAG: 'Filtrar por Tag...',
			BROWSE_GENRES: 'Navegar',
			LOOKING_AT_GENRE: 'Você está vendo o gênero:',
			MARK_COMPLETED: 'Marca completa',
			NO_TVSHOWS_FOUND: 'Nenhuma Série Disponível',
			NO_MOVIES_FOUND: 'Nenhum Filme Disponível'
		},
		VIDEO: {
			RELEASED: 'Lançado',
			IMDB: 'IMDB',
			RATING: 'Classificação',
			VOTES: 'Votos',
			OVERVIEW: 'Visão Geral',
			GENRE: 'Gênero',
			TRAILER: 'Trailer',
			SEASON: 'Temporada',
			SUBTITLES: 'Legendas'
		},

		MESSAGES: {
			SHARE_SOCKET: 'Ao criar uma nova sessão você será redirecionado de volta para esse player, mas dessa vez você terá um ID de sessão único na url. Compartilhe isso com seus amigos e tenha uma experiência sincronizada com eles!',
			FILE_MISSING: 'Houve um problema com esse conteúdo. Parece que você removeu o arquivo de vídeo associado a ele.. Compartilhe isso com seus amigos e tenha uma experiência sincronizada com eles!',
			CODEC_PROBLEM: 'Parece que houve um problema ao adicionar o arquivo de vídeo ao player. Isso aconteceu provavelmente por causa de um problema de codec. Tente converter o vídeo para um codec compatível com HTML5, remova o arquivo de vídeo atual e re-adicione ele. Se os codecs estão ok, cheque o log de erros do servidor e a URL base nas configurações.',
			WRONG_BASEPATH: 'Seu vídeo foi incluído usando o caminho base errado, mas você está navegando na página via "{{basePath}}". Verifique se você usou o caminho base correto nas configurações e que você está usando ele para navegar na aplicação.'
		},
		MANAGE_CONTENT: 'Gerenciar Conteúdo',
		ADMIN: 'Admin',
		HELP: 'Ajuda',
		HELP_FAQ: 'AJUDA / FAQ',
		PROFILE_SETTINGS: 'Configurações do Perfil',
		LOGOUT: 'Sair',
		CHANGE_PASSWORD: 'Mudar Senha',
		LANGUAGE_en: 'Inglês',
		LANGUAGE_de: 'Alemão',
		LANGUAGE_fr: 'Francês',
		LANGUAGE_es: 'Espanhol',
		LANGUAGE_kr: 'Coreano',
		LANGUAGE_nl: 'Holandês',
		LANGUAGE_pt: 'Português',

		PROFIlE: {
			USERNAME: 'Usuário',
			FULL_NAME: 'Nome completo',
			LANGUAGE: 'Linguagem',
			PAUSE_ON_CLICK: 'Pausar vídeo ao Clicar',
			FAVORITE_GENRES: 'Gêneros favoritos',
			SAVE: 'Salvar Perfil',
			PASS: 'Senha',
			OLD_PASS: 'Senha Antiga',
			NEW_PASS: 'Senha Nova',
			NEW_PASS_PLACEHOLDER: 'Senha Nova  (min. 6 caracteres)',
			REPEAT_PASS: 'Repita a Senha',
			PASS_ERROR_EMPTY: 'A senha não pode estar vazia',
			PASS_ERROR_LENGTH: 'A senha tem que ter pelo menos 6 caracteres',
			PASS_ERROR_REPEAT: 'As senhas tem que coincidir'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Adicionado por Último',
			OLDEST_ADDED: 'Adicionado Primeiro',
			NEWEST_RELEASED: 'Lançado por Último',
			OLDEST_RELEASED: 'Lançado Primeiro',
			NEWEST_AIRED: 'Transmitido por Último',
			OLDEST_AIRED: 'Transmitido Primeiro'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'Como eu envio um vídeo?',
				TEXT: "Você pode enviar conteúdo no menu Gerenciar Conteúdo. Escolha se você quer Enviar um Filme, uma Série ou outro tipo de conteúdo. Clique na opção relevante no sub-menu" +
				" na barra vertical de navegação do lado esquerdo da tela. Você pode enviar um vídeo clicando no botão \"Create New Movie/TV Show/Other Video\" ou digitando" +
				" o nome do vídeo que você quer enviar na barra de pesquisa e selecionando o vídeo relevante nos resultados da busca. Depois disso, você pode escolher preencher as informações" +
				" do vídeo ou manualmente ou carregando as informações do TheMovieDB. Depois disso, você pode enviar o vídeo e os arquivos de legenda clicando no botão Gerenciar Conteúdo."
			},
			DELETE_VIDEO: {
				TITLE: 'Como eu deleto um vídeo?',
				TEXT: "Você pode deletar um vídeo indo para a página de informação do vídeo e clicando em Gerenciar Conteúdo e clicando no botão vermelho de lixeira. Clicar em Edit Movie" +
				" e então em Delete Movie é outro jeito de fazer isso. Você também pode usar o Gerenciador de Arquivos que fica no Gerenciador de Conteúdo. Você pode ver todos os arquivos que" +
				" você enviou lá. Clique no botão da lixeira vermelha para deletar um arquivo."
			},
			VIDEO_FORMATS: {
				TITLE: 'Que formatos de vídeo são suportados?',
				TEXT: "O Streama atualmente suporta apenas formatos de vídeo suportados pelo player HTML5. Você pode testar se o seu arquivo de vídeo é compatível com o player HTML5 simplesmente" +
				" arrastando e soltando seu arquivo numa nova aba do seu navegador."
			},
			SUBTITLES: {
				TITLE: 'Como eu adiciono legendas para os vídeos?',
				TEXT: "Você pode adicionar legendas para os vídeos clicando no botão Gerenciar Arquivos, que fica na página de informações do vídeo. Você pode arrastar e soltar" +
				" o arquivo das legendas lá. Antigamente vocÊ tinha que manualmente converter a legenda para um formato compatível, mas não mais! Agora a aplicação converte pra você."
			},
			INVITE_USERS: {
				TITLE: 'Como eu convido meus amigos para assistir meus vídeos hosteados?',
				TEXT:"Você pode compartilhar seus vídeos com seus amigos convidando eles para usar o seu Streama hosteado. Vá para o menu de Usuários e clique o botão Invite User. Preencha o formulário e" +
				" selecione os cargos do convidado. Usuários com o cargo Admin podem editar Usuários & Configurações. Usuários com o cargo Content Manager podem editar conteúdo. Seu amigo será notificado sobre" +
				" o convite via email. Você também pode compartilhar sessões de vídeo com seus amigos clicando no botão de Compartilhar dentro do player e mandando o link da sessão para eles."
			},
			BASE_URL: {
				TITLE: "O que é a URL base e como eu devo configurá-la?",
				TEXT: "A URL base é usada para vídeos e para o link no email de convite."
			},
			NOTIFICATIONS: {
				TITLE: "O que são notificações?",
				TEXT: "Você pode notificar seus amigos conviados sobre vídeos enviados mandando notificações para eles. Você pode enviar notificações adicionando eles a fila de notificações ao clicar" +
				" Add Notification button which is in your video's information page and going to the Notifications menu and clicking Send Queue button."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "O player tem botões de atalho?",
				TEXT: "Sim. Pausar/resumir: espaço. Volume: setas para cima e para baixo. Pular vídeo para frente ou para trás: setas para esquerda e para direita. Pulo longo:" +
				" control + setas para esquerda e para direita. Ligar ou desligar a tela cheia: alt + enter. Ligar ou desligar legendas: S, Mutar: M, Voltar para e tela anterior:" +
				" delete ou backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "Como os gênereos favoritos do usuário afetam o Streama?",
				TEXT: "Em breve..."
			},
			USEFUL_LINKS: {
				TITLE: "Links úteis",
				TEXT: "Em breve..."
			}
		}
	});
}]);
