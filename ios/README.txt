** GENERAR NUEVA APP Y SUBIRLA **

* Tienes que estar en un mac (nuestro mac tiene password TravelCompositor421)

* Copiar carpeta Travelc y abrir proyecto en el xcode en {nombremicrosite}/Polyfills/cordova/platforms/ios

1- Ir a la carpeta {nombremicrosite}\Polyfills\cordova\platforms\ios\Travelc\Images.xcassets\AppIcon.appiconset y reemplazar todas las imagenes por imagenes del microsite.
Tamaños y nombres que deben tener las imagenes:
        Name="icon-60@3x.png" width="180" height="180"
        Name="icon-60.png" width="60" height="60"
        Name="icon-60@2x.png" width="120" height="120"
        Name="icon-76.png" width="76" height="76"
        Name="icon-76@2x.png" width="152" height="152"
        Name="icon-40.png" width="40" height="40"
        Name="icon-40@2x.png" width="80" height="80"
        Name="icon.png" width="57" height="57"
        Name="icon@2x.png" width="114" height="114"
        Name="icon-72.png" width="72" height="72"
        Name="icon-72@2x.png" width="144" height="144"
        Name="icon-167.png" width="167" height="167"
        Name="icon-small.png" width="29" height="29"
        Name="icon-small@2x.png" width="58" height="58"
        Name="icon-50.png" width="50" height="50"
        Name="icon-50@2x.png" width="100" height="100"
        Name="icon-83.5@2x.png" width="167" height="167"
        Name="icon-1024.png" width="1024" height="1024"
        Name="icon-small@3x.png" width="87" height="87"


2- Ir a la carpeta {nombremicrosite}\Polyfills\cordova\platforms\ios\Travelc\Images.xcassets\LaunchImage.launchimage y reemplazar todas las imagenes por imagenes del microsite.
Tamaños y nombres que deben tener las imagenes:
	Name="Default~iphone.png" width="320" height="480"
    Name="Default@2x~iphone.png" width="640" height="960"
    Name="Default-Portrait~ipad.png" width="768" height="1024"
    Name="Default-Portrait@2x~ipad.png" width="1536" height="2048"
    Name="Default-Landscape~ipad.png" width="1024" height="768"
    Name="Default-Landscape@2x~ipad.png" width="2048" height="1536"
    Name="Default-568h@2x~iphone.png" width="640" height="1136"
    Name="Default-667h.png" width="750" height="1334"
    Name="Default-736h.png" width="1242" height="2208"


3- Cambiar la url que se muestra al abrir la app.
Cambiar en el fichero {nombremicrosite}/Polyfills/cordova/platforms/ios/Travelc/config.xml el atributo src de la etiqueta content por el de la url que quieras. ** OJO: Si se cambia desde el xcode el fichero cuelga de /Starging/config.xml


4- Poner un Bundle Identifier único, versión, build y el nombre de la aplicación. El nombre de la aplicación tiene valor ${PRODUCT_NAME} que es el nombre de la aplicación original (Travelc)
Estas variables se pueden editar en el fichero {nombremicrosite}\Polyfills\cordova\platforms\ios\Travelc\Travelc-Info.plist.
Recomiendo editarle a través de una vista en el xcode, pinchando en el documento raiz que sale y allí aparecerán todos esas campos editables en la pestaña general. Ver imagen xcode-ios.png.


5- Comprobar en la vista de la imagen que en la seccion Signing esta seleccionada Automatically manage signing y el campo Team a TRAVEL COMPOSITOR SL.
Recomiendo deseleccionar el campo Automatically manage signing y seleccionarlo de nuevo, si no haces esto y cambias el Bundle identifier falla al firmarla.


6- También hay que comprobar que se oculta el status bar. 
Esto se traduce en añadir 3 parametros al {nombremicrosite}\Polyfills\cordova\platforms\ios\Travelc\Travelc-Info.plist:
<key>UIStatusBarHidden</key>
<true/>
<key>UIStatusBarHidden~ipad</key>
<true/>
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
Esto se puede hacer tambien desde la vida del xcode. En el video te explican como hacerlo https://www.youtube.com/watch?v=5WNo4uBUTiY


7- Tienes que entrar a developer.apple.com a la seccion de itunes connect, crear una nueva app y establecer el Bundle ID Suffix que pusiste en el paso 4 y seguir los pasos indicados.
Apple Id: developer@travelcompositor.com
Password: TravelCompositor421


8- Para subir la app tienes que ir en las opciones de arriba del xcode Product -> Archive, con Generic iOS Device y se subirá al itunes connect.
Key access: TravelCompositor421

9- Testear la app si quieres y seguir los pasos hasta conseguir publicarla.


** INFORMACION ADICIONAL **

* Información adicional. Las app se firman automaticamente con el usuario que tenemos registrado en el xcode.
La informacion se encuentra en developer.apple.com. Para crear una app hay que ir al itunes connect y crear una nueva app y rellenar los datos que nos piden.
Los usuarios podemos verlo en xcode -> Preferences en la pestaña de accounts

* Tenemos dos certificados uno para desarrollo (Vicente Rossello) y otro de produccion (TRAVEL COMPOSITOR SL)



** COMO GENERÉ LA APP (no debe hacer falta hacerlo de nuevo) **

Usar http://www.manifoldjs.com/generator y generar la app de ios. La aplicacion de ios se crea en projects\Polyfills\cordova\platforms\ios

1- Abrir proyecto con xcode, el proyecto se encuentra en projects\Polyfills\cordova\platforms\ios\{micrositeName}.xcodeproj


2- Ir al fichero projects/Polyfills/cordova/platforms/ios/{micrositeName}/config.xml y cambiar:

* Eliminar estas dos etiquetas:
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />

* Cambiar etiqueta
<allow-navigation hap-rule="yes" href="{url}" />
por estas dos
<allow-navigation hap-rule="yes" href="https://*" />
<allow-navigation hap-rule="yes" href="http://*" />

* Cambiar user agent para saber que estas en cordova para que se oculte el panel de informacion de las cookies, para ello añadir:
<preference name="OverrideUserAgent" value="cordova-app ios" />


3- Ir a la carpeta projects\Polyfills\cordova\platforms\ios\{micrositeName}\Images.xcassets\AppIcon.appiconset y reemplazar todas las imagenes por imagenes del microsite.
Tamaños y nombres que deben tener las imagenes:
        Name="icon-60@3x.png" width="180" height="180"
        Name="icon-60.png" width="60" height="60"
        Name="icon-60@2x.png" width="120" height="120"
        Name="icon-76.png" width="76" height="76"
        Name="icon-76@2x.png" width="152" height="152"
        Name="icon-40.png" width="40" height="40"
        Name="icon-40@2x.png" width="80" height="80"
        Name="icon.png" width="57" height="57"
        Name="icon@2x.png" width="114" height="114"
        Name="icon-72.png" width="72" height="72"
        Name="icon-72@2x.png" width="144" height="144"
        Name="icon-167.png" width="167" height="167"
        Name="icon-small.png" width="29" height="29"
        Name="icon-small@2x.png" width="58" height="58"
        Name="icon-50.png" width="50" height="50"
        Name="icon-50@2x.png" width="100" height="100"
        Name="icon-83.5@2x.png" width="167" height="167"
        Name="icon-1024.png" width="1024" height="1024"
        Name="icon-small@3x.png" width="87" height="87"


4- Ir al fichero projects\Polyfills\cordova\platforms\ios\{micrositeName}\Images.xcassets\AppIcon.appiconset\Contents.json y añadir al objeto json cuya propiedad idiom es "ios-marketing" la siguiente propiedad.
"filename" : "icon-1024.png"


5- Ir a la carpeta projects\Polyfills\cordova\platforms\ios\{micrositeName}\Images.xcassets\LaunchImage.launchimage y reemplazar todas las imagenes por imagenes del microsite.
Tamaños y nombres que deben tener las imagenes:
	Name="Default~iphone.png" width="320" height="480"
    Name="Default@2x~iphone.png" width="640" height="960"
    Name="Default-Portrait~ipad.png" width="768" height="1024"
    Name="Default-Portrait@2x~ipad.png" width="1536" height="2048"
    Name="Default-Landscape~ipad.png" width="1024" height="768"
    Name="Default-Landscape@2x~ipad.png" width="2048" height="1536"
    Name="Default-568h@2x~iphone.png" width="640" height="1136"
    Name="Default-667h.png" width="750" height="1334"
    Name="Default-736h.png" width="1242" height="2208"


6- Para subir una app tienes que comprobar el fichero projects\Polyfills\cordova\platforms\ios\{micrositeName}\{micrositeName}-Info.plist, este debe tener un Bundle Identifier único, además puedes editarle allí la versión, el build y el nombre de la aplicación (que por defecto tiene valor ${PRODUCT_NAME} que es el nombre que tenga el {micrositeName}).
Estas opciones se pueden cambiar también en el xcode pinchando en el documento raiz que sale y allí si cambias en la pantlla a Target {micrositeName} aparecerán todos esas campos editables en la pestaña general.
En la vista del xcode vienen los usuarios con los que podemos firmar. Debes elegir TRAVEL COMPOSITOR SL para subir a produccion.
Ver imagen xcode-ios.png


7- Para generar una app tienes que ir a la opciones del xcode Product -> Archive, con Generic iOS Device  y subirlo al itunes connect
Key access: TravelCompositor421




//NOTIFICACIONES PUSH. Para preparar la app para poder recibir notificaciones push hay que seguir el siguiente manual. Los certificados necesarios están en la carpeta certificados del mac:

https://medium.com/@imfx/apple-push-notification-services-6323b24b8bfa

También hay que añadir la propiedad ITSAppUsesNonExemptEncryption = false en el archivo :\Polyfills\cordova\platforms\ios\{micrositeName}\{micrositeName}-Info.plist

<key>ITSAppUsesNonExemptEncryption</key><false/>