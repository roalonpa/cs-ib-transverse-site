import "./operating-systems.css"

export default function OperatingSystems() {
    return (
        <div className="operating-systems-role-functions-A1-3 resource">
            <h1>Rol y Funciones del Sistema Operativo</h1>
            <section className="operating-systems-A1-3-section">
            <div>
                <h2>A1.3.1 Rol de los sistemas operativos</h2>
                <p>El sistema operativo gestiona los recursos del sistema y la interacción con el usuario.</p>
                <div className="operating-systems-grid-resources">
                    <div>
                        <h4>CPU</h4>
                        <p>Planifica y asigna tiempo de CPU entre los distintos procesos e hilos, implementando algoritmos de planificación para gestionar la ejecución de procesos, priorizar tareas y manejar solicitudes de interrupción.</p>
                    </div>
                    <div>
                        <h4>Memoria</h4>
                        <p>Gestiona la memoria física y virtual, incluyendo la asignación y liberación de memoria a los procesos, el intercambio entre RAM y disco (paginación), y la protección de espacios de memoria para evitar interferencias entre procesos.</p>
                    </div>
                    <div>
                        <h4>Almacenamiento</h4>
                        <p>Gestiona el almacenamiento mediante sistemas de archivos; maneja la creación, eliminación, lectura, escritura, permisos y organización de archivos, así como la asignación de espacio en disco y la integridad del sistema de archivos.</p>
                    </div>
                    <div>
                        <h4>E/S (entrada/salida)</h4>
                        <p>Gestiona el flujo de datos hacia y desde los dispositivos de E/S, como teclados, ratones e interfaces de red. Administra las interrupciones de los dispositivos; por ejemplo, cuando se detecta el movimiento del ratón.</p>
                    </div>
                    <div>
                        <h4>Pila de red</h4>
                        <p>Gestiona la pila de red para facilitar la transmisión de datos a través de interfaces de red, manejando protocolos, conexiones de red y asignación de ancho de banda.</p>
                    </div>
                    <div>
                        <h4>Interfaz de usuario (UI)</h4>
                        <p>Proporciona los marcos y herramientas necesarios para construir interfaces gráficas y de línea de comandos, traduciendo las acciones del usuario en llamadas al sistema. Aunque técnicamente no es un recurso, la UI es fundamental para interactuar con una computadora.</p>
                    </div>
                    <div>
                        <h4>Seguridad y control de acceso</h4>
                        <p>Aplica políticas de seguridad, gestiona la autenticación, autorización, cifrado y registros de auditoría de usuarios. Entre las áreas de seguridad, controla el acceso a archivos, aplicaciones y configuraciones del sistema.</p>
                    </div>
                    <div>
                        <h4>Gestión de procesos y tareas</h4>
                        <p>Gestiona el ciclo de vida de los procesos e hilos, incluyendo creación, ejecución, suspensión y terminación, junto con mecanismos de comunicación entre procesos (IPC) y sincronización.</p>
                    </div>
                    <div>
                        <h4>Gestión de energía</h4>
                        <p>Administra los recursos de energía para optimizar la duración de la batería, incluyendo el control del uso de energía por parte de los componentes de hardware y la implementación de modos de ahorro de energía.</p>
                    </div>
                    <div>
                        <h4>Dispositivos externos y periféricos</h4>
                        <p>Gestiona los dispositivos externos conectados mediante USB, Bluetooth u otras interfaces, garantizando la compatibilidad y el correcto funcionamiento a través de controladores de dispositivo.</p>
                    </div>
                </div>
            </div>
            </section>
            <section className="operating-systems-A1-3-section">
            <div>
                <h2>A1.3.2 Funciones del sistema operativo</h2>
                <div className="operating-systems-functions-subtopic">
                    <h2>Procesos</h2>
                    <p> Un proceso es una instancia de un programa en ejecución. Un programa es un conjunto pasivo de instrucciones; un proceso es la ejecución activa y dinámica de esas instrucciones.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Ejecución de un programa</h3>
                            <p>Al ejecutar un programa, sus instrucciones se cargan en memoria y el SO crea un proceso para gestionar su ejecución. Pueden existir múltiples procesos del mismo programa al mismo tiempo.</p>
                        </div>
                        <div>
                            <h3>Apropiacion de recursos</h3>
                            <p>Cada proceso recibe un área aislada (sandbox) que incluye: memoria privada (código, datos y pila), intervalos de tiempo de CPU, y acceso a archivos abiertos y conexiones de red.</p>
                        </div>
                        <div>
                            <h3>Entidad gestionada por el SO</h3>
                            <p>El SO registra: estado del proceso, ID de proceso (PID), registros de CPU, prioridad y estadísticas de uso de recursos.</p>
                        </div>
                        <div>
                            <h3>Estados de un proceso</h3>
                            <p>Al rastrear los estados, el SO puede planificar procesos, liberar recursos retenidos por procesos bloqueados y gestionar estados de error.</p> 
                            <ul>
                                <li><span>Nuevo:</span> siendo creado y cargado en memoria</li>
                                <li><span>Listo:</span> esperando su turno en la CPU</li>
                                <li><span>En ejecucion:</span> ejecutando instrucciones en la CPU</li>
                                <li><span>Bloqueado:</span> esperando un evento externo (E/S, red…)</li>
                                <li><span>Terminado:</span> finalizado; siendo limpiado por el SO</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Hilos (Threads)</h3>
                            <p>Un hilo es la secuencia más pequeña de instrucciones que puede ser gestionada de forma independiente por un planificador. Múltiples hilos dentro de un proceso comparten el mismo espacio de memoria pero pueden ejecutarse en paralelo en sistemas multinúcleo. Ejemplo: un procesador de texto usa hilos separados para renderizar, revisar ortografía y gestionar la entrada del usuario.</p>
                        </div>
                    </div>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Integridad del sistema</h2>
                    <p>Estado de un sistema cuando realiza sus funciones previstas de forma correcta y confiable, sin alteraciones no autorizadas. Incluye corrección, completitud, precisión de datos, protección contra manipulación y resiliencia.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Aislamiento de procesos</h3>
                            <p>Cada proceso opera en su propio espacio de memoria virtual, evitando interferencias accidentales o maliciosas con otros procesos o con el SO.</p>
                        </div>
                        <div>
                            <h3>Proteccion de memoria</h3>
                            <p>Los espacios de memoria separados impiden que un proceso lea o escriba en la memoria de otro proceso o del SO.</p>
                        </div>
                        <div>
                            <h3>Modo usuario / modo kernel</h3>
                            <p>Separa las operaciones que requieren acceso directo al hardware (modo kernel) de las que no lo requieren (modo usuario). Las aplicaciones no pueden decidir dónde leer o escribir en memoria.</p>
                        </div>
                        <div>
                            <h3>Planificacion de la CPU</h3>
                            <p>Asigna tiempo de CPU a los procesos, asegurando que las operaciones críticas no sean innecesariamente bloqueadas por las aplicaciones de usuario.</p>
                        </div>
                        <div>
                            <h3>Control de acceso y permisos</h3>
                            <p>Permisos individuales y de grupo asignados a cada archivo y directorio. Las listas de control de acceso (ACL) brindan un control más flexible sobre los recursos del sistema.</p>
                        </div>
                        <div>
                            <h3>Seguridad del sistema de archivos</h3>
                            <p>Gestiona permisos de lectura, escritura y ejecución por archivo para el propietario, el grupo y otros. Solo procesos y usuarios autorizados pueden acceder a archivos específicos.</p>
                        </div>
                        <div>
                            <h3>Cifrado</h3>
                            <p>Protege la confidencialidad e integridad de los datos. Ejemplos: BitLocker (Windows), FileVault (macOS), dm-crypt/LUKS (Linux).</p>
                        </div>
                        <div>
                            <h3>Firewalls y antivirus</h3>
                            <p>Los firewalls monitorean el tráfico de red a nivel de paquetes. El antivirus supervisa archivos en busca de comportamiento malicioso y firmas de virus conocidas.</p>
                        </div>
                        <div>
                            <h3>Gestion de parches</h3>
                            <p>Despliegue de cambios de código (parches) para corregir errores, vulnerabilidades de seguridad o añadir funcionalidades. Los parches incluyen verificación de integridad antes de su instalación. Categorías: corrección de errores, parches de seguridad, mejoras de funciones, actualizaciones de compatibilidad.</p>
                        </div>
                        <div>
                            <h3>Funciones de reversion (rollback)</h3>
                            <p>Permiten volver al último estado conocido como bueno si una actualización causa problemas. Windows: Restaurar sistema. macOS: Time Machine.</p>
                        </div>
                        <div>
                            <h3>Verificacion de integridad de datos</h3>
                            <p>Las sumas de verificación (checksums) y los hashes comprueban la integridad de los archivos comparándolos con valores conocidos, detectando corrupción o cambios no autorizados.</p>
                        </div>
                        <div>
                            <h3>Monitoreo y registro (logging)</h3>
                            <p>El monitoreo rastrea métricas de rendimiento en tiempo real (CPU, memoria, red). El registro guarda la actividad pasada del sistema para auditorías y detección de anomalías.</p>
                        </div>
                    </div>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Gestión de memoria</h2>
                    <p>Asigna y libera memoria a los procesos, garantiza que cada proceso tenga un espacio de direcciones separado y protegido, e implementa la memoria virtual.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Paginas de memoria</h3>
                            <p>Bloques contiguos de tamaño fijo de memoria virtual. El SO y la unidad de gestión de memoria (MMU) mantienen tablas de páginas que mapean direcciones virtuales a direcciones físicas.</p>
                        </div>
                        <div>
                            <h3>Memoria virtual</h3>
                            <p>Separa las direcciones virtuales usadas por los procesos de la memoria física real. Permite que los procesos usen más memoria de la disponible físicamente, paginando datos entre la RAM y el disco según sea necesario.</p>
                        </div>
                    </div>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Sistemas de archivos</h2>
                    <p>Método que utiliza el SO para controlar cómo se almacenan y recuperan los datos en dispositivos de almacenamiento físico. Define reglas de nomenclatura, estructura de directorios, asignación de espacio en disco y lleva registro de las áreas disponibles.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Sistema de archivos</th>
                                <th>Usado por</th>
                                <th>Características</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>NTFS</td>
                                <td>Windows</td>
                                <td>Permisos, registro en diario, cifrado</td>
                            </tr>
                            <tr>
                                <td>ext4</td>
                                <td>Linux</td>
                                <td>Sistema estándar de Linux, registro en diario</td>
                            </tr>
                            <tr>
                                <td>APFS</td>
                                <td>macOS</td>
                                <td>Optimizado para SSD, cifrado integrado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Gestión de dispositivos</h2>
                    <p>Permite la interacción entre el SO y el hardware mediante controladores de dispositivo (drivers). Los drivers convierten comandos del SO en señales específicas para cada componente de hardware y permiten la transferencia de datos. El hardware se comunica de vuelta con el SO mediante interrupciones (por ejemplo, una tecla presionada o la llegada de un paquete de red).</p>
                    <p>La gestión de dispositivos proporciona una interfaz uniforme para que las aplicaciones accedan a los recursos de hardware, independientemente del hardware específico utilizado.</p>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Seguridad</h2>
                    <p>Los mecanismos de seguridad del SO se enmarcan en la tríada CIA: Confidencialidad, Integridad y Disponibilidad. El SO proporciona las siguientes funciones de seguridad:</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <ul>
                                <li><span>Firewalls</span></li>
                                <li><span>Cifrado</span></li>
                                <li><span>Control de acceso</span></li>
                                <li><span>Autenticación de usuarios</span></li>
                                <li><span>Parches de seguridad</span></li>
                                <li><span>Sandboxing (aislamiento de aplicaciones)</span></li>
                                <li><span>Registro de actividad (Logging)</span></li>
                                <li><span>Verificación de integridad de datos</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Contabilidad de recursos (Accounting)</h2>
                    <p>Seguimiento y registro del uso de recursos: tiempo de CPU, memoria, espacio en disco y ancho de banda de red. Originalmente usada para cobrar a usuarios de mainframes multiusuario; hoy es fundamental en la computación en la nube, donde las organizaciones pagan por lo que usan.</p>
                    <p>Cada entrada de registro incluye: marca de tiempo, ID de proceso, ID de usuario, recursos solicitados y duración del uso. En algunos sistemas también se registran solicitudes denegadas, ejecuciones fallidas y errores durante la asignación de recursos.</p>
                    <p>Dónde ver los registros: Visor de eventos (Windows) · Consola (macOS) · directorio <code>/var/log</code> (Linux)</p>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Interfaz gráfica de usuario (GUI)</h2>
                    <p>El SO actúa como intermediario entre el usuario, las aplicaciones y el hardware. La GUI facilita la interacción mediante elementos visuales: íconos, menús, ventanas y botones, utilizables con mouse, teclado o pantalla táctil.</p>
                    <p>El campo de la interacción humano-computadora (HCI, por sus siglas en inglés) guía el diseño y la mejora de las interfaces informáticas.</p>
                </div>

                <div className="operating-systems-functions-subtopic">
                    <h2>Virtualización</h2>
                    <p>Crea instancias virtuales del hardware físico, permitiendo que una sola máquina física aloje múltiples máquinas virtuales (VM). Cada VM opera como si tuviera hardware dedicado propio.</p>
                    <p>Hipervisor: Capa de software especializada que gestiona las VM, divide los recursos físicos en fragmentos virtualizados y garantiza que las VM permanezcan dentro de sus límites sin interferir entre sí.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Uso eficiente de recursos</h3>
                            <p>Múltiples VM comparten la CPU, memoria y almacenamiento de una sola máquina, aumentando la utilización del hardware y reduciendo los costos de infraestructura.</p>
                        </div>
                        <div>
                            <h3>Aislamiento</h3>
                            <p>Un fallo o compromiso de seguridad en una VM no afecta a las demás VM que se ejecutan en la misma máquina física.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="operating-systems-A1-3-section">
            <div>
                <h2>Server vs Workstation</h2>
                <div className="operating-systems-functions-subtopic">
                    <h2>Server</h2>
                    <p>Es un sistema operativo diseñado para dar servicios a otras computadoras a través de una red. No está pensado para que alguien lo use sentado frente a él, sino para que esté prendido 24/7 respondiendo pedidos.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Characteristics</h3>
                            <ul>
                                <li>Optimizado para estabilidad, seguridad y manejar muchas conexiones simultáneas.</li>
                                <li>Muchas veces ni siquiera tiene interfaz gráfica (se maneja por terminal/comandos) para ahorrar recursos.</li>
                                <li>Atiende a múltiples usuarios o máquinas al mismo tiempo.</li>
                                <li>Hardware enfocado en RAM, almacenamiento y red, no tanto en gráficos.</li>
                                <li>Servicios típicos: alojar páginas web, bases de datos, correo, archivos compartidos.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Examples</h3>
                            <ul>
                                <li>Windows Server (2019, 2022).</li>
                                <li>Ubuntu Server.</li>
                                <li>Red Hat Enterprise Linux.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="operating-systems-functions-subtopic">
                    <h2>Workstation</h2>
                    <p>Es un sistema operativo (o computadora) diseñado para un usuario individual que lo usa directamente, sentado frente a la pantalla.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Characteristics</h3>
                            <ul>
                                <li>Tiene interfaz gráfica pensada para trabajar (apps, navegador, edición, diseño, etc.)</li>
                                <li>Optimizado para tareas del usuario: procesar texto, navegar, jugar, programar.</li>
                                <li>Hardware más enfocado a gráficos, procesador rápido para tareas interactivas.</li>
                                <li>Un solo usuario activo a la vez (en general).</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Examples</h3>
                            <ul>
                                <li>Windows 11 (versión común).</li>
                                <li>MacOS en una MacBook.</li>
                                <li>Ubuntu Desktop.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="operating-systems-A1-3-section">
            <div>
                <h2>Sistemas Operativos</h2>
                <div className="operating-systems-functions-subtopic">
                    <h2>Windows</h2>
                    <p>Sistema operativo desarrollado por Microsoft, lanzado por primera vez en 1985. Es el sistema operativo más usado del mundo en computadoras de escritorio y portátiles.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Caracteristicas</h3>
                            <ul>
                                <li>Interfaz gráfica con ventanas, íconos y escritorio, lo que lo hace fácil de usar</li>
                                <li>Muy utilizado a lo largo del mundo por su compatibilidad con videojuegos, programas y dispositivos.</li>
                                <li>Software propietario (de pago, aunque viene preinstalado en la mayoría de las PC)</li>
                                <li>Gran compatibilidad con hardware de distintas marcas</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Tipos</h3>
                            <ul>
                                <li>Windows WS (Workstation), como Windows 11, está pensado para que una sola persona use programas, trabaje o juegue directamente en la computadora</li>
                                <li>Windows Server es una versión diseñada para administrar recursos y brindar servicios a muchas computadoras en una red, con servidores</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Comandos comunes</h3>
                            <ul>
                                <li>dir → ver archivos de la carpeta actual</li>
                                <li>cd [NOMBRE] → cambiar de carpeta</li>
                                <li>cd .. → volver a la carpeta anterior</li>
                                <li>mkdir [NOMBRE] → crear una carpeta nueva</li>
                                <li>tasklist → ver procesos abiertos</li>
                                <li>shutdown → apagar o reiniciar la PC</li>
                                <li>ipconfig → ver configuración de red</li>
                                <li>net user → gestionar usuarios (Server)</li>
                                <li>gpupdate → actualizar políticas de red (Server)</li>
                                <li>sfc /scannow → reparar archivos del sistema</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="operating-systems-functions-subtopic">
                    <h2>macOS</h2>
                    <p>Sistema operativo desarrollado por Apple, exclusivo para las computadoras de la marca (MacBook, iMac, Mac mini, Mac Studio). Se lanzó en 2001 como Mac OS X y está basado en Unix.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Caracteristicas</h3>
                            <ul>
                                <li>Interfaz gráfica pulida, con el Dock en la parte inferior y la barra de menú superior fija.</li>
                                <li>Software propietario: solo se puede usar legalmente en hardware de Apple.</li>
                                <li>Muy usado en diseño gráfico, edición de video, producción musical y desarrollo de software.</li>
                                <li>Integración fluida con otros dispositivos Apple (iPhone, iPad, AirPods) mediante funciones como AirDrop, Handoff y Continuity.</li>
                                <li>Al estar basado en Unix, incluye una terminal potente parecida a la de Linux.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Tipos</h3>
                            <p>No tiene "ediciones" como Windows. Apple lanza una versión nueva por año, cada una con nombre de un lugar de California (Ventura, Sonoma, Sequoia, etc.)</p>
                        </div>
                        <div>
                            <h3>Comandos Comunes</h3>
                            <ul>
                                <li>ls → ver archivos y carpetas</li>
                                <li>cd [NOMBRE] → abrir una carpeta</li>
                                <li>cd .. → volver a la carpeta anterior</li>
                                <li>cd ~ → ir a la carpeta personal (Home)</li>
                                <li>mkdir [NOMBRE] → crear una carpeta nueva</li>
                                <li>touch [nombre] → crear un archivo vacío</li>
                                <li>mv [origen] [destino] → mover un archivo</li>
                                <li>open . → abrir la carpeta actual en Finder</li>
                                <li>brew install [programa] → instalar un programa (con Homebrew, el gestor de paquetes más usado en Mac)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="operating-systems-functions-subtopic">
                    <h2>Linux</h2>
                    <p>Linux es un sistema operativo de código abierto y gratuito, creado por Linus Torvalds en 1991. A diferencia de Windows y MacOS, Linux no es un único sistema sino una familia enorme de versiones llamadas distribuciones (o "distros"), cada una pensada para distintos usos: Ubuntu, Debian, Fedora, Arch, Mint, etc.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Caracteristicas</h3>
                            <ul>
                                <li>Software libre: cualquiera puede ver, modificar y distribuir el código.</li>
                                <li>Gratis en la mayoría de sus distribuciones.</li>
                                <li>Muy usado en servidores, supercomputadoras y dispositivos (Android está basado en el núcleo de Linux).</li>
                                <li>Altamente personalizable: podés cambiar prácticamente cualquier parte del sistema.</li>
                                <li>Más liviano que Windows, suele funcionar bien en computadoras viejas.</li>
                                <li>Fuerte cultura de uso de la terminal, aunque también tiene interfaces gráficas.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Tipos</h3>
                            <ul>
                                <li>Ubuntu: una de las distribuciones más populares y amigables para principiantes.</li>
                                <li>Debian: conocida por su estabilidad y seguridad, base de muchas otras distros.</li>
                                <li>Fedora: enfocada en software libre y tecnologías nuevas.</li>
                                <li>Arch Linux: para usuarios avanzados que quieren personalizar todo desde cero.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Comandos Comunes</h3>
                            <ul>
                                <li>pwd: Muestra la ruta del directorio en el que te encuentras actualmente.</li>
                                <li>cd [directorio]: Cambia tu ubicación actual al directorio especificado.</li>
                                <li>ls: Lista los archivos y carpetas que contiene tu directorio actual.</li>
                                <li>mkdir [nombre]: Crea una nueva carpeta.</li>
                                <li>touch [nombre]: Crea un archivo vacío o actualiza su fecha de modificación.</li>
                                <li>cat [archivo]: Muestra el contenido completo de un archivo de texto en la pantalla.</li>
                                <li>cp [origen] [destino]: Copia archivos o carpetas.</li>
                                <li>mv [origen] [destino]: Mueve o renombra archivos y carpetas.</li>
                                <li>rm [archivo]: Elimina un archivo.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="operating-systems-functions-subtopic">
                        <h2>Ubuntu</h2>
                        <p>Ubuntu es una distribución de Linux desarrollada por la empresa Canonical desde 2004. Es la versión más conocida y usada de Linux para usuarios comunes, porque busca ser fácil de instalar y de usar sin perder la potencia de Linux.</p>
                        <div className="operating-systems-functions-subtopic-characteristics">
                            <div>
                                <h3>Caracteristicas</h3>
                                <ul>
                                    <li>A diferencia de otros sistemas informáticos que lanzan actualizaciones "cuando están listas" o de forma caótica, Canonical tiene un calendario estricto e inamovible desde hace dos décadas: se publica una versión nueva cada seis meses (en abril y octubre).</li>
                                    <li>Cada dos años se lanza una versión LTS (Long Term Support) con soporte normal de 5 años.</li>
                                    <li>Ubuntu creó y empujó su propio sistema de instalación de programas llamado Snap, que incluye todas las dependencias que el programa necesita para funcionar dentro de una "caja" cerrada (sandbox). Si instalás una aplicación de diseño pesada, esta no va a romper nada del resto del sistema operativo.</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Comandos Comunes</h3>
                                <ul>
                                    <li>ls → ver carpetas disponibles</li>
                                    <li>cd [NOMBRE] → abrir carpeta</li>
                                    <li>cd .. → regresar a la carpeta anterior</li>
                                    <li>cd → ir directo a tu carpeta personal (Home)</li>
                                    <li>nautilus . → abrir la carpeta actual en una ventana</li>
                                    <li>nautilus ~/Descargas → abrir una carpeta específica</li>
                                    <li>mkdir [NOMBRE] → crear una carpeta nueva</li>
                                    <li>touch [nombre] → crear un archivo de texto vacío</li>
                                    <li>mv [origen] [destino] → mover un archivo</li>
                                    <li>sudo apt install [programa] → descargar e instalar un programa desde la terminal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="operating-systems-A1-3-section">
            <div>
                <h2>Emuladores</h2>
                <div className="operating-systems-functions-subtopic">
                    <h2>¿Qué son los emuladores?</h2>
                    <p>Los emuladores de sistemas operativos son programas que simulan el funcionamiento de un sistema operativo (o de una computadora entera) dentro de otro sistema operativo. Básicamente, te permiten "engañar" a una compu para que se comporte como si fuera otra distinta.</p>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>¿Cómo funcionan?</h3>
                            <p>Un emulador imita el hardware y/o software de un sistema diferente, traduciendo las instrucciones del sistema "emulado" para que la máquina real las entienda y ejecute. Es como un traductor en tiempo real entre dos sistemas que no hablan el mismo "idioma".</p>
                        </div>
                        <div>
                            <h3>¿Para qué se usan?</h3>
                            <ul>
                                <li>Correr software de otro SO: usar programas de Windows en una Mac, o apps de Android en una PC.</li>
                                <li>Probar sistemas operativos sin instalarlos: probar Linux desde Windows sin formatear nada.</li>
                                <li>Desarrollo de software: probar apps en distintos sistemas (ej: una app de iPhone desde una compu).</li>
                                <li>Retrocompatibilidad: ejecutar programas viejos que ya no corren en sistemas modernos.</li>
                                <li>Videojuegos retro: emuladores de consolas viejas (Nintendo, PlayStation) en la PC.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Emulación vs. Virtualización</h3>
                            <ul>
                                <li>Emulación: simula hardware diferente (más lento, pero más flexible).</li>
                                <li>Virtualización: usa el mismo hardware, solo crea un "espacio aislado" para otro SO (más rápido).</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Ventajas y desventajas</h3>
                            <ul>
                                <li>Pérdida de rendimiento (sobre todo en emulación pura).</li>
                                <li>Consumo de RAM y CPU.</li>
                                <li>Problemas de licencia (especialmente con macOS, que Apple no permite emular legalmente fuera de hardware Apple).</li>
                                <li>No siempre 100% compatible.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="operating-systems-functions-subtopic">
                    <h2>Herramientas principales</h2>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>VirtualBox</h3>
                            <p>Gratis, multiplataforma, virtualización. El más usado en educación.</p>
                        </div>
                        <div>
                            <h3>VMware</h3>
                            <p>Similar a VirtualBox, más profesional, hay versión paga.</p>
                        </div>
                        <div>
                            <h3>Wine</h3>
                            <p>Corre programas de Windows en Linux/Mac sin emular Windows entero (traduce llamadas API). No es ni emulador ni máquina virtual en sentido estricto.</p>
                        </div>
                        <div>
                            <h3>WSL</h3>
                            <p>Windows Subsystem for Linux: Microsoft permite correr Linux directamente dentro de Windows.</p>
                        </div>
                        <div>
                            <h3>Parallels / Boot Camp</h3>
                            <p>Específicos para correr Windows en Mac.</p>
                        </div>
                        <div>
                            <h3>QEMU</h3>
                            <p>Emulador open source, más técnico, muy usado en desarrollo.</p>
                        </div>
                        <div>
                            <h3>BlueStacks</h3>
                            <p>Emula Android en Windows/Mac.</p>
                        </div>
                        <div>
                            <h3>DOSBox</h3>
                            <p>Emula MS-DOS para correr juegos y programas viejos.</p>
                        </div>
                    </div>
                </div>
                <div className="operating-systems-functions-subtopic">
                    <h2>Emuladores en acción</h2>
                    <div className="operating-systems-functions-subtopic-characteristics">
                        <div>
                            <h3>Windows</h3>
                            <a href="https://win7simu.visnalize.com/">Ir al emulador (Windows 7)</a>
                        </div>
                        <div>
                            <h3>MacOS</h3>
                            <a href="https://www.macos-web.app/">Ir al emulador (MacOS)</a>
                        </div>
                        <div>
                            <h3>MacOS retro</h3>
                            <a href="https://infinitemac.org/1992/System%207.1">Ir al emulador (Macintosh)</a>
                        </div>
                        <div>
                            <h3>Linux</h3>
                            <a href="https://distrosea.com/es/select/ubuntu/">Ir al emulador (Ubuntu)</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}