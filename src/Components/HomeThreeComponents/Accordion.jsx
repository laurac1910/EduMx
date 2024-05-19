import { Disclosure } from "@headlessui/react";
import React from "react";
import { faq } from "../../constant/images";

const Accordion = () => {
  return (
    <div className="section-padding  bg-white bg-[url('../images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
          <div>
            <div className="mini-title">Preguntas Frecuentes</div>
            <div className="column-title ">
              Preguntas <span className="shape-bg">Generales</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null}>
                    <Disclosure.Button
                      type="button"
                      className="accrodain-button"
                    >
                      <span>
                        ¿Por qué es importante hablar abiertamente de los
                        sentimientos con nuestros hijos?
                      </span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Hablar de los sentimientos con nuestros hijos les ayuda a
                      desarrollar habilidades emocionales clave, como la
                      empatía, la autoconciencia y la gestión emocional. Esto
                      les permite comprender y manejar mejor sus propias
                      emociones y las de los demás, lo que contribuye a
                      relaciones más saludables y una mejor resolución de
                      conflictos.
                    </Disclosure.Panel>
                  </li>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null}>
                    <Disclosure.Button
                      type="button"
                      className="accrodain-button"
                    >
                      <span>
                        ¿Cuál es el impacto de expresar amor y aprecio hacia
                        nuestros hijos de manera regular?
                      </span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Expresar amor y aprecio hacia nuestros hijos de manera
                      regular fortalece su autoestima y seguridad emocional.
                      Saber que son amados y valorados incondicionalmente les
                      brinda un sentido de pertenencia y confianza en sí mismos
                      que influye positivamente en su desarrollo emocional y
                      social.
                    </Disclosure.Panel>
                  </li>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null}>
                    <Disclosure.Button
                      type="button"
                      className="accrodain-button"
                    >
                      <span>
                        ¿Cómo podemos fomentar la comunicación abierta y el
                        diálogo sobre valores familiares?
                      </span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Es importante crear un ambiente familiar donde se sientan
                      seguros para expresar sus opiniones y valores. Esto se
                      logra promoviendo la escucha activa, mostrando respeto por
                      las opiniones de los demás y modelando los valores que
                      queremos inculcar en ellos. Además, dedicar tiempo
                      regularmente a discutir y reflexionar sobre los valores
                      familiares refuerza su importancia y relevancia en la vida
                      diaria.
                    </Disclosure.Panel>
                  </li>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null}>
                    <Disclosure.Button
                      type="button"
                      className="accrodain-button"
                    >
                      <span>
                        ¿Cuál es el papel de los padres en la transmisión de
                        valores a sus hijos?
                      </span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Los padres son los principales modelos de comportamiento y
                      valores para sus hijos. A través de sus acciones y
                      palabras, los padres transmiten consciente e
                      inconscientemente los valores que consideran importantes.
                      Por lo tanto, es fundamental que los padres reflexionen
                      sobre sus propios valores y actúen de manera coherente con
                      ellos, ya que esto tiene un impacto significativo en la
                      formación de los valores de sus hijos.
                    </Disclosure.Panel>
                  </li>
                )}
              </Disclosure>
            </ul>
          </div>
          <div>
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
