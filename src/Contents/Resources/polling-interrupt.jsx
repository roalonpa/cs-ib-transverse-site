import "./polling-interrupt.css";

export default function PollingInterrupt() {
    return (
        <div className="polling-interrupt resource">
            <h1>A1.3.4 Polling and Interrupt Handling</h1>
            <table>
                <thead>
                    <tr>
                        <th>Aspecto</th>
                        <th className="polling">Polling</th>
                        <th className="interrupt">Interrupt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Definicion</td>
                        <td className="polling">Polling es cuando la CPU les pregunta a los dispositivos, a intervalos regulares, si necesitan que atienda un evento.</td>
                        <td className="interrupt">Un interrupt es una señal que un dispositivo le manda a la CPU para que atienda un evento, lo que hace que la CPU guarde su estado, frene lo que está haciendo, ejecute la ISR (interrupt service routine) y después vuelva a lo que estaba haciendo.</td>
                    </tr>
                    <tr>
                        <td>Eficiencia</td>
                        <td className="polling">Baja. La CPU tiene que interrumpir el proceso que este haciendo regularmente, incluso si no es nesesario. Esto gasta energia y perjudica la bateria del dispositivo.</td>
                        <td className="interrupt">Alta. La CPU atiende los eventos rapidamente y en el momento que sea necesario, haciendolo mas eficiente y responsivo.</td>
                    </tr>
                    <tr>
                        <td>Ejemplo</td>
                        <td className="polling">PLC controlando un motor en una línea de ensamblaje: los eventos son predecibles y ocurren a intervalos fijos, así que la CPU sabe de antemano cuándo el motor va a necesitar atención: preguntar a intervalos regulares deja de ser un desperdicio. Además, las máquinas de la línea deben estar coordinadas, y para eso importa más la latencia controlada (respuestas en momentos previsibles) que la velocidad pura. Por eso conviene polling.</td>
                        <td className="interrupt">Nodos de sensores empotrados: funcionan a batería (que debe durar) y detectan eventos de forma infrecuente e impredecible. Con polling, la CPU preguntaría todo el tiempo aunque no pase nada, gastando energía y descargando la batería. El interrupt mantiene la CPU inactiva hasta que un sensor genera un evento, lo que reduce el consumo, preserva la autonomía y da respuesta inmediata. Por eso conviene interrupt.</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}