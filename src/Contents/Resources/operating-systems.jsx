import "./operating-systems.css"

export default function OperatingSystems() {
    return (
        <div className="operating-systems-role-functions-A1-3-resource">
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
        </div>
    )
}