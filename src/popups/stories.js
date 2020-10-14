wwLib.wwPopups.addStory('WWCONTAINER_LAYOUT', {
    title: {
        en: "Container's layout",
        fr: 'Disposition du container',
    },
    type: 'wwPopupForm',
    buttons: {
        OK: {
            text: {
                en: 'Ok',
                fr: 'Valider',
            },
            next: false,
        },
    },
    storyData: {
        fields: [
            {
                label: {
                    en: "Container's layout",
                    fr: 'Disposition du container',
                },
                desc: {
                    en: 'Set layout to column or row.',
                    fr: 'Changer la disposition du container en colonne ou en ligne.',
                },
                type: 'select',
                key: 'direction',
                valueData: 'content.direction',
                options: {
                    wwObject: {},
                    values: [
                        {
                            value: 'column',
                            text: {
                                en: 'Column',
                                fr: 'Colonne',
                            },
                        },
                        {
                            value: 'row',
                            default: true,
                            text: {
                                en: 'Row',
                                fr: 'Ligne',
                            },
                        },
                    ],
                },
            },
            {
                label: {
                    en: "Reverse elements' order",
                    fr: "Inverser l'ordre des élements",
                },
                desc: {
                    en: 'Show element in reverse order.',
                    fr: 'Afficher les élements dans un sens inversé.',
                },
                type: 'radio',
                key: 'reverse',
                valueData: 'content.reverse',
            },
            {
                label: {
                    en: "Elements' position on primary axis",
                    fr: "Position des élements sur l'axe principal",
                },
                desc: {
                    en: '',
                    fr: '',
                },
                type: 'select',
                key: 'justifyContent',
                valueData: 'content.justifyContent',
                options: {
                    wwObject: {},
                    values: [
                        {
                            value: 'flex-start',
                            text: {
                                en: 'Start',
                                fr: 'Début',
                            },
                        },
                        {
                            value: 'center',
                            text: {
                                en: 'Center',
                                fr: 'Millieu',
                            },
                        },
                        {
                            value: 'flex-end',
                            text: {
                                en: 'End',
                                fr: 'Fin',
                            },
                        },
                        {
                            value: 'space-between',
                            default: true,
                            text: {
                                en: 'Space between elements',
                                fr: 'Espace entre les élements',
                            },
                        },
                        {
                            value: 'space-around',
                            text: {
                                en: 'Space around elements',
                                fr: 'Espace autours des élements',
                            },
                        },
                        {
                            value: 'space-evenly',
                            text: {
                                en: 'Even Spaces around elements',
                                fr: 'Espace égaux autours des élements',
                            },
                        },
                    ],
                },
            },
            {
                label: {
                    en: "Elements' position on secondary axis",
                    fr: "Position des élements sur l'axe secondaire",
                },
                desc: {
                    en: '',
                    fr: '',
                },
                type: 'select',
                key: 'alignItems',
                valueData: 'content.alignItems',
                options: {
                    wwObject: {},
                    values: [
                        {
                            value: 'flex-start',
                            text: {
                                en: 'Start',
                                fr: 'Début',
                            },
                        },
                        {
                            value: 'center',
                            default: true,
                            text: {
                                en: 'Center',
                                fr: 'Millieu',
                            },
                        },
                        {
                            value: 'flex-end',
                            text: {
                                en: 'End',
                                fr: 'Fin',
                            },
                        },
                        {
                            value: 'stretch',
                            text: {
                                en: 'Stretch',
                                fr: 'Etirer',
                            },
                        },
                    ],
                },
            },
            {
                label: {
                    en: 'Wrap elements if needed (For rows only)',
                    fr: "Mettre les élements à la ligne si necessaire (Pour l'affichage en lignes seulement)",
                },
                desc: {
                    en: '',
                    fr: '',
                },
                type: 'radio',
                key: 'flexWrap',
                valueData: 'content.flexWrap',
            },
            {
                label: {
                    en: 'Min height',
                    fr: 'Hauteur minumale',
                },
                desc: {
                    en: "Use 'px' or '%' as unit.",
                    fr: "Utiliser 'px' ou '%' comme unité.",
                },
                type: 'text',
                key: 'minHeight',
                valueData: 'content.minHeight',
            },
        ],
    },
});
