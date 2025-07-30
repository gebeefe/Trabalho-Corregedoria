document.addEventListener('DOMContentLoaded', () => {

    // --- REESTRUTURAÇÃO DOS DADOS POR ANO ---
    const allYearsData = {
        "2020": {
            "JADS": 2, "PADS_INSTAURADOS": 9, "PADS_CONCLUIDOS": 6,
            "JUDS_POSITIVOS": 9, "JUDS_NEGATIVOS": 0,
            "PADS_ASSUNTO": [
                {"assunto": "ABANDONO DE CARGO", "quantidade": 2}, {"assunto": "ACUMULAÇÃO LÍCITA DE CARGOS", "quantidade": 2},
                {"assunto": "FRAUDES EM LICENCIAMENTOS DE VEÍCULOS", "quantidade": 1}, {"assunto": "ASSÉDIO SEXUAL", "quantidade": 1},
                {"assunto": "FALTAS INTERPOLADAS", "quantidade": 1}, {"assunto": "NÃO PRESTAÇÃO DE CONTAS", "quantidade": 1},
                {"assunto": "Outros", "quantidade": 1}
            ],
            "SANCOES_APLICADAS_TOTAL": 8,
            "SANCOES_APLICADAS_DETALHE": [
                {"tipo": "ARQUIVAMENTO", "quantidade": 5}, {"tipo": "SUSPENSÃO", "quantidade": 3},
                {"tipo": "DEMISSÃO", "quantidade": 0}, {"tipo": "CASSAÇÃO DE APOSENTADORIA", "quantidade": 0},
                {"tipo": "DESTITUIÇÃO DE CARGO", "quantidade": 0}, {"tipo": "REPREENSÃO", "quantidade": 0},
                {"tipo": "SOBRESTAMENTO", "quantidade": 0}
            ],
            "PADS_ORIGEM": [
                {"orgao": "SES", "quantidade": 3}, {"orgao": "SEEDUC", "quantidade": 3},
                {"orgao": "CGE", "quantidade": 1}, {"orgao": "DETRAN-RJ", "quantidade": 1},
                {"orgao": "CECIERJ", "quantidade": 1}, {"orgao": "DEGASE", "quantidade": 0},
                {"orgao": "ITERJ", "quantidade": 0}, {"orgao": "FAETEC", "quantidade": 0},
                {"orgao": "SECC", "quantidade": 0}, {"orgao": "SEPLAG", "quantidade": 0},
                {"orgao": "RIOPREVIDENCIA", "quantidade": 0}, {"orgao": "SECID", "quantidade": 0}
            ]
        },
        "2021": {
            "JADS": 2, "PADS_INSTAURADOS": 74, "PADS_CONCLUIDOS": 43,
            "JUDS_POSITIVOS": 73, "JUDS_NEGATIVOS": 1,
            "PADS_ASSUNTO": [
                {"assunto": "ABANDONO DE CARGO", "quantidade": 15}, {"assunto": "ACUMULAÇÃO LÍCITA DE CARGOS", "quantidade": 12},
                {"assunto": "FRAUDES EM LICENCIAMENTOS DE VEÍCULOS", "quantidade": 11}, {"assunto": "ASSÉDIO SEXUAL", "quantidade": 6},
                {"assunto": "FALTAS INTERPOLADAS", "quantidade": 5}, {"assunto": "NÃO PRESTAÇÃO DE CONTAS", "quantidade": 4},
                {"assunto": "Outros", "quantidade": 21}
            ],
            "SANCOES_APLICADAS_TOTAL": 55,
            "SANCOES_APLICADAS_DETALHE": [
                {"tipo": "ARQUIVAMENTO", "quantidade": 31}, {"tipo": "SUSPENSÃO", "quantidade": 5},
                {"tipo": "DEMISSÃO", "quantidade": 15}, {"tipo": "CASSAÇÃO DE APOSENTADORIA", "quantidade": 2},
                {"tipo": "DESTITUIÇÃO DE CARGO", "quantidade": 1}, {"tipo": "SOBRESTAMENTO", "quantidade": 1},
                {"tipo": "REPREENSÃO", "quantidade": 0}
            ],
            "PADS_ORIGEM": [
                {"orgao": "SEEDUC", "quantidade": 51}, {"orgao": "SES", "quantidade": 11},
                {"orgao": "DEGASE", "quantidade": 5}, {"orgao": "CGE", "quantidade": 2},
                {"orgao": "ITERJ", "quantidade": 1}, {"orgao": "FAETEC", "quantidade": 1},
                {"orgao": "SECID", "quantidade": 1}, {"orgao": "DETRAN-RJ", "quantidade": 0},
                {"orgao": "CECIERJ", "quantidade": 0}, {"orgao": "SECC", "quantidade": 0},
                {"orgao": "SEPLAG", "quantidade": 0}, {"orgao": "RIOPREVIDENCIA", "quantidade": 0}
            ]
        },
        "2022": {
            "JADS": 3, "PADS_INSTAURADOS": 84, "PADS_CONCLUIDOS": 61,
            "JUDS_POSITIVOS": 82, "JUDS_NEGATIVOS": 2,
            "PADS_ASSUNTO": [
                {"assunto": "ABANDONO DE CARGO", "quantidade": 32}, {"assunto": "ACUMULAÇÃO LÍCITA DE CARGOS", "quantidade": 18},
                {"assunto": "FRAUDES EM LICENCIAMENTOS DE VEÍCULOS", "quantidade": 9}, {"assunto": "ASSÉDIO SEXUAL", "quantidade": 6},
                {"assunto": "FALTAS INTERPOLADAS", "quantidade": 5}, {"assunto": "NÃO PRESTAÇÃO DE CONTAS", "quantidade": 2},
                {"assunto": "Outros", "quantidade": 12}
            ],
            "SANCOES_APLICADAS_TOTAL": 66,
            "SANCOES_APLICADAS_DETALHE": [
                {"tipo": "ARQUIVAMENTO", "quantidade": 38}, {"tipo": "SUSPENSÃO", "quantidade": 4},
                {"tipo": "DEMISSÃO", "quantidade": 22}, {"tipo": "CASSAÇÃO DE APOSENTADORIA", "quantidade": 1},
                {"tipo": "DESTITUIÇÃO DE CARGO", "quantidade": 1}, {"tipo": "SOBRESTAMENTO", "quantidade": 0},
                {"tipo": "REPREENSÃO", "quantidade": 0}
            ],
            "PADS_ORIGEM": [
                {"orgao": "SEEDUC", "quantidade": 61}, {"orgao": "SES", "quantidade": 7},
                {"orgao": "DEGASE", "quantidade": 4}, {"orgao": "FAETEC", "quantidade": 3},
                {"orgao": "DETRAN-RJ", "quantidade": 2}, {"orgao": "SECC", "quantidade": 1},
                {"orgao": "SECID", "quantidade": 1}, {"orgao": "CGE", "quantidade": 0},
                {"orgao": "ITERJ", "quantidade": 0}, {"orgao": "CECIERJ", "quantidade": 0},
                {"orgao": "SEPLAG", "quantidade": 0}, {"orgao": "RIOPREVIDENCIA", "quantidade": 0}
            ]
        },
        "2023": {
            "JADS": 12, "PADS_INSTAURADOS": 172, "PADS_CONCLUIDOS": 80,
            "JUDS_POSITIVOS": 171, "JUDS_NEGATIVOS": 1,
            "PADS_ASSUNTO": [
                {"assunto": "ABANDONO DE CARGO", "quantidade": 43}, {"assunto": "ACUMULAÇÃO LÍCITA DE CARGOS", "quantidade": 38},
                {"assunto": "FRAUDES EM LICENCIAMENTOS DE VEÍCULOS", "quantidade": 33}, {"assunto": "ASSÉDIO SEXUAL", "quantidade": 10},
                {"assunto": "FALTAS INTERPOLADAS", "quantidade": 10}, {"assunto": "NÃO PRESTAÇÃO DE CONTAS", "quantidade": 9},
                {"assunto": "Outros", "quantidade": 29}
            ],
            "SANCOES_APLICADAS_TOTAL": 111,
            "SANCOES_APLICADAS_DETALHE": [
                {"tipo": "ARQUIVAMENTO", "quantidade": 46}, {"tipo": "SUSPENSÃO", "quantidade": 24},
                {"tipo": "DEMISSÃO", "quantidade": 37}, {"tipo": "CASSAÇÃO DE APOSENTADORIA", "quantidade": 5},
                {"tipo": "SOBRESTAMENTO", "quantidade": 1}, {"tipo": "DESTITUIÇÃO DE CARGO", "quantidade": 0},
                {"tipo": "REPREENSÃO", "quantidade": 0}
            ],
            "PADS_ORIGEM": [
                {"orgao": "SEEDUC", "quantidade": 90}, {"orgao": "SES", "quantidade": 13},
                {"orgao": "DEGASE", "quantidade": 6}, {"orgao": "FAETEC", "quantidade": 4},
                {"orgao": "DETRAN-RJ", "quantidade": 33}, {"orgao": "SEPLAG", "quantidade": 2},
                {"orgao": "RIOPREVIDENCIA", "quantidade": 17}, {"orgao": "CGE", "quantidade": 0},
                {"orgao": "ITERJ", "quantidade": 0}, {"orgao": "CECIERJ", "quantidade": 0},
                {"orgao": "SECC", "quantidade": 0}, {"orgao": "SEPLAG", "quantidade": 0},
                {"orgao": "SECID", "quantidade": 0}
            ]
        },
        "2024": {
            "JADS": 184, "PADS_INSTAURADOS": 197, "PADS_CONCLUIDOS": 13,
            "JUDS_POSITIVOS": 191, "JUDS_NEGATIVOS": 3,
            "PADS_ASSUNTO": [
                {"assunto": "ABANDONO DE CARGO", "quantidade": 52}, {"assunto": "ACUMULAÇÃO LÍCITA DE CARGOS", "quantidade": 31},
                {"assunto": "FRAUDES EM LICENCIAMENTOS DE VEÍCULOS", "quantidade": 28}, {"assunto": "ASSÉDIO SEXUAL", "quantidade": 14},
                {"assunto": "FALTAS INTERPOLADAS", "quantidade": 13}, {"assunto": "NÃO PRESTAÇÃO DE CONTAS", "quantidade": 7},
                {"assunto": "Outros", "quantidade": 52}
            ],
            "SANCOES_APLICADAS_TOTAL": 27,
            "SANCOES_APLICADAS_DETALHE": [
                {"tipo": "ARQUIVAMENTO", "quantidade": 6}, {"tipo": "SUSPENSÃO", "quantidade": 8},
                {"tipo": "DEMISSÃO", "quantidade": 11}, {"tipo": "CASSAÇÃO DE APOSENTADORIA", "quantidade": 2},
                {"tipo": "DESTITUIÇÃO DE CARGO", "quantidade": 0}, {"tipo": "REPREENSÃO", "quantidade": 0},
                {"tipo": "SOBRESTAMENTO", "quantidade": 1}
            ],
            "PADS_ORIGEM": [
                {"orgao": "SEEDUC", "quantidade": 127}, {"orgao": "SES", "quantidade": 11},
                {"orgao": "DEGASE", "quantidade": 4}, {"orgao": "FAETEC", "quantidade": 10},
                {"orgao": "DETRAN-RJ", "quantidade": 16}, {"orgao": "CGE", "quantidade": 4},
                {"orgao": "RIOPREVIDENCIA", "quantidade": 9}, {"orgao": "ITERJ", "quantidade": 0},
                {"orgao": "CECIERJ", "quantidade": 0}, {"orgao": "SECC", "quantidade": 0},
                {"orgao": "SEPLAG", "quantidade": 0}, {"orgao": "SECID", "quantidade": 0}
            ]
        },
        "2025": {
            "JADS": 42, "PADS_INSTAURADOS": 42, "PADS_CONCLUIDOS": 0,
            "JUDS_POSITIVOS": 38, "JUDS_NEGATIVOS": 0,
            "PADS_ASSUNTO": [
                {"assunto": "ABANDONO DE CARGO", "quantidade": 29}, {"assunto": "ACUMULAÇÃO LÍCITA DE CARGOS", "quantidade": 2},
                {"assunto": "FRAUDES EM LICENCIAMENTOS DE VEÍCULOS", "quantidade": 1}, {"assunto": "ASSÉDIO SEXUAL", "quantidade": 1},
                {"assunto": "FALTAS INTERPOLADAS", "quantidade": 1}, {"assunto": "NÃO PRESTAÇÃO DE CONTAS", "quantidade": 1},
                {"assunto": "Outros", "quantidade": 7}
            ],
            "SANCOES_APLICADAS_TOTAL": 0,
            "SANCOES_APLICADAS_DETALHE": [
                {"tipo": "ARQUIVAMENTO", "quantidade": 6}, {"tipo": "SUSPENSÃO", "quantidade": 8},
                {"tipo": "DEMISSÃO", "quantidade": 11}, {"tipo": "CASSAÇÃO DE APOSENTADORIA", "quantidade": 2},
                {"tipo": "DESTITUIÇÃO DE CARGO", "quantidade": 0}, {"tipo": "REPREENSÃO", "quantidade": 0},
                {"tipo": "SOBRESTAMENTO", "quantidade": 1}
            ],
            "PADS_ORIGEM": [
                {"orgao": "SEEDUC", "quantidade": 27}, {"orgao": "SES", "quantidade": 6},
                {"orgao": "DEGASE", "quantidade": 1}, {"orgao": "FAETEC", "quantidade": 5},
                {"orgao": "DETRAN-RJ", "quantidade": 1}, {"orgao": "CGE", "quantidade": 1},
                {"orgao": "RIOPREVIDENCIA", "quantidade": 1}, {"orgao": "ITERJ", "quantidade": 0},
                {"orgao": "CECIERJ", "quantidade": 0}, {"orgao": "SECC", "quantidade": 0},
                {"orgao": "SEPLAG", "quantidade": 0}, {"orgao": "SECID", "quantidade": 0}
            ]
        }
    };

    // Função para obter todas as categorias únicas de assuntos, sanções e órgãos
    const getAllCategories = () => {
        const assuntoCategories = new Set();
        const sancaoCategories = new Set();
        const orgaoCategories = new Set();

        for (const year in allYearsData) {
            allYearsData[year].PADS_ASSUNTO.forEach(item => assuntoCategories.add(item.assunto));
            allYearsData[year].SANCOES_APLICADAS_DETALHE.forEach(item => sancaoCategories.add(item.tipo));
            allYearsData[year].PADS_ORIGEM.forEach(item => orgaoCategories.add(item.orgao));
        }
        return {
            assuntos: Array.from(assuntoCategories).sort(),
            sancoes: Array.from(sancaoCategories).sort(),
            orgaos: Array.from(orgaoCategories).sort()
        };
    };

    const uniqueCategories = getAllCategories();

    // Helper para normalizar os dados, garantindo que todas as categorias estejam presentes
    // com 0 se não houver dados, para facilitar a agregação.
    const normalizeYearData = (yearData) => {
        const normalizedAssunto = uniqueCategories.assuntos.map(cat => ({
            assunto: cat,
            quantidade: yearData.PADS_ASSUNTO.find(item => item.assunto === cat)?.quantidade || 0
        }));
        const normalizedSancao = uniqueCategories.sancoes.map(cat => ({
            tipo: cat,
            quantidade: yearData.SANCOES_APLICADAS_DETALHE.find(item => item.tipo === cat)?.quantidade || 0
        }));
        const normalizedOrgao = uniqueCategories.orgaos.map(cat => ({
            orgao: cat,
            quantidade: yearData.PADS_ORIGEM.find(item => item.orgao === cat)?.quantidade || 0
        }));

        return {
            ...yearData,
            PADS_ASSUNTO: normalizedAssunto,
            SANCOES_APLICADAS_DETALHE: normalizedSancao,
            PADS_ORIGEM: normalizedOrgao
        };
    };

    // Agrega os dados para os anos selecionados
    const aggregateData = (selectedYears) => {
        if (selectedYears.length === 0) {
            return {
                "JADS": 0, "PADS_INSTAURADOS": 0, "PADS_CONCLUIDOS": 0,
                "JUDS_POSITIVOS": 0, "JUDS_NEGATIVOS": 0,
                "PADS_ASSUNTO": uniqueCategories.assuntos.map(cat => ({ assunto: cat, quantidade: 0 })),
                "SANCOES_APLICADAS_TOTAL": 0,
                "SANCOES_APLICADAS_DETALHE": uniqueCategories.sancoes.map(cat => ({ tipo: cat, quantidade: 0 })),
                "PADS_ORIGEM": uniqueCategories.orgaos.map(cat => ({ orgao: cat, quantidade: 0 }))
            };
        }

        const aggregated = {
            "JADS": 0, "PADS_INSTAURADOS": 0, "PADS_CONCLUIDOS": 0,
            "JUDS_POSITIVOS": 0, "JUDS_NEGATIVOS": 0,
            "PADS_ASSUNTO": {},
            "SANCOES_APLICADAS_TOTAL": 0,
            "SANCOES_APLICADAS_DETALHE": {},
            "PADS_ORIGEM": {}
        };

        uniqueCategories.assuntos.forEach(cat => aggregated.PADS_ASSUNTO[cat] = 0);
        uniqueCategories.sancoes.forEach(cat => aggregated.SANCOES_APLICADAS_DETALHE[cat] = 0);
        uniqueCategories.orgaos.forEach(cat => aggregated.PADS_ORIGEM[cat] = 0);

        selectedYears.forEach(year => {
            const data = normalizeYearData(allYearsData[year]);

            aggregated.JADS += data.JADS;
            aggregated.PADS_INSTAURADOS += data.PADS_INSTAURADOS;
            aggregated.PADS_CONCLUIDOS += data.PADS_CONCLUIDOS;
            aggregated.JUDS_POSITIVOS += data.JUDS_POSITIVOS;
            aggregated.JUDS_NEGATIVOS += data.JUDS_NEGATIVOS;
            aggregated.SANCOES_APLICADAS_TOTAL += data.SANCOES_APLICADAS_TOTAL;

            data.PADS_ASSUNTO.forEach(item => {
                aggregated.PADS_ASSUNTO[item.assunto] += item.quantidade;
            });
            data.SANCOES_APLICADAS_DETALHE.forEach(item => {
                aggregated.SANCOES_APLICADAS_DETALHE[item.tipo] += item.quantidade;
            });
            data.PADS_ORIGEM.forEach(item => {
                aggregated.PADS_ORIGEM[item.orgao] += item.quantidade;
            });
        });

        aggregated.PADS_ASSUNTO = Object.keys(aggregated.PADS_ASSUNTO).map(assunto => ({
            assunto: assunto,
            quantidade: aggregated.PADS_ASSUNTO[assunto]
        }));
        aggregated.SANCOES_APLICADAS_DETALHE = Object.keys(aggregated.SANCOES_APLICADAS_DETALHE).map(tipo => ({
            tipo: tipo,
            quantidade: aggregated.SANCOES_APLICADAS_DETALHE[tipo]
        }));
        aggregated.PADS_ORIGEM = Object.keys(aggregated.PADS_ORIGEM).map(orgao => ({
            orgao: orgao,
            quantidade: aggregated.PADS_ORIGEM[orgao]
        }));

        return aggregated;
    };

    const getCssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name);

    let admissibilityChartInstance = null;
    const renderAdmissibilityChart = (positive, negative) => {
        const admissibilityCtx = document.getElementById('admissibilityChart').getContext('2d');
        if (admissibilityChartInstance) {
            admissibilityChartInstance.destroy();
        }
        admissibilityChartInstance = new Chart(admissibilityCtx, {
            type: 'doughnut',
            data: {
                labels: ['Positivo', 'Negativo'],
                datasets: [{
                    data: [positive, negative],
                    backgroundColor: [getCssVar('--navy-blue'), getCssVar('--border-color')],
                    hoverBackgroundColor: [getCssVar('--dark-blue'), '#aaaaaa'],
                    borderWidth: 1,
                    borderColor: getCssVar('--white')
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'right', labels: { font: { family: 'Roboto', size: 14 }, color: getCssVar('--text-color') } },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) { label += ': '; }
                                const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                                const percentage = ((context.raw / total) * 100).toFixed(1);
                                label += `${context.raw} (${percentage}%)`;
                                return label;
                            }
                        },
                        bodyFont: { family: 'Roboto' },
                        titleFont: { family: 'Roboto' }
                    }
                }
            }
        });
    };

    const renderVerticalBarChart = (data, chartId, totalSpanId, labelKey, valueKey) => {
        const chartContainer = document.getElementById(chartId);
        const totalSpan = document.getElementById(totalSpanId);

        const totalCalculated = data.reduce((sum, item) => sum + item[valueKey], 0);
        if (totalSpan) {
            totalSpan.textContent = totalCalculated;
        }

        const chartBaseHeightForCalculation = 350;
        const valueHeadroom = 40;

        const effectiveChartHeight = chartBaseHeightForCalculation - valueHeadroom;

        const maxQuantity = Math.max(...data.map(item => item[valueKey]));

        chartContainer.innerHTML = '';

        data.sort((a, b) => b.quantidade - a.quantidade).forEach((item) => {
            const barItem = document.createElement('div');
            barItem.classList.add('bar-item');

            const barHeight = maxQuantity === 0 ? 0 : (item[valueKey] / maxQuantity) * effectiveChartHeight;
            barItem.style.height = `${barHeight}px`;

            const barValue = document.createElement('span');
            barValue.classList.add('bar-value');
            barValue.textContent = item[valueKey];
            barItem.appendChild(barValue);

            const barLabel = document.createElement('span');
            barLabel.classList.add('bar-label');
            barLabel.textContent = item[labelKey];
            barItem.appendChild(barLabel);

            barItem.title = `${item[labelKey]}: ${item[valueKey]}`;

            chartContainer.appendChild(barItem);
        });
    };

    let orgaoChartInstance = null;
    const renderOrgaoChart = (data) => {
        const orgaoCtx = document.getElementById('orgChart').getContext('2d');
        const backgroundColors = [
            getCssVar('--navy-blue'), getCssVar('--dark-blue'), getCssVar('--medium-blue'),
            '#4a72a1', '#7b9acc', '#a0b2d6', '#c5d0e8'
        ];

        const sortedData = data.sort((a, b) => b.quantidade - a.quantidade);
        const labels = sortedData.map(item => item.orgao);
        const quantities = sortedData.map(item => item.quantidade);

        if (orgaoChartInstance) {
            orgaoChartInstance.destroy();
        }

        orgaoChartInstance = new Chart(orgaoCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Quantidade',
                    data: quantities,
                    backgroundColor: backgroundColors,
                    borderColor: getCssVar('--white'),
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                label += context.raw;
                                return label;
                            }
                        },
                        bodyFont: { family: 'Roboto' },
                        titleFont: { family: 'Roboto' }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: { color: getCssVar('--light-text-color'), font: { family: 'Roboto' } },
                        title: { display: true, text: 'Quantidade', color: getCssVar('--light-text-color'), font: { family: 'Roboto', weight: 'bold' } }
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: getCssVar('--light-text-color'), font: { family: 'Roboto' } },
                        title: { display: true, text: 'Órgão', color: getCssVar('--light-text-color'), font: { family: 'Roboto', weight: 'bold' } }
                    }
                }
            }
        });
    };

    const yearSelect = document.getElementById('yearSelect');
    const metricJADS = document.querySelector('.metric-card:nth-child(1) .metric-value');
    const metricPADSInstaurados = document.getElementById('totalPadsMain');
    const metricPADSConcluidos = document.querySelector('.metric-card:nth-child(3) .metric-value');
    const judsPositivos = document.getElementById('judsPositivos');
    const judsNegativos = document.getElementById('judsNegativos');
    const totalSanctionsText = document.getElementById('totalSanctionsText');

    const populateYearFilter = () => {
        const years = Object.keys(allYearsData).sort((a, b) => b - a);

        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Selecione um ano";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        yearSelect.appendChild(defaultOption);

        const allYearsOption = document.createElement('option');
        allYearsOption.value = "all";
        allYearsOption.textContent = "Todos os anos";
        yearSelect.appendChild(allYearsOption);

        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
    };

    const updateUI = (data) => {
        metricJADS.textContent = data.JADS;
        metricPADSInstaurados.textContent = data.PADS_INSTAURADOS;
        metricPADSConcluidos.textContent = data.PADS_CONCLUIDOS;

        judsPositivos.textContent = data.JUDS_POSITIVOS;
        judsNegativos.textContent = data.JUDS_NEGATIVOS;
        
        totalSanctionsText.textContent = data.SANCOES_APLICADAS_TOTAL;

        renderAdmissibilityChart(data.JUDS_POSITIVOS, data.JUDS_NEGATIVOS);
        renderVerticalBarChart(data.PADS_ASSUNTO, 'padAssuntoChart', 'totalPadsAssunto', 'assunto', 'quantidade');
        renderVerticalBarChart(data.SANCOES_APLICADAS_DETALHE, 'sanctionChart', 'totalSanctions', 'tipo', 'quantidade');
        renderOrgaoChart(data.PADS_ORIGEM);
    };

    yearSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        let dataToRender;

        if (selectedValue === "all") {
            const allYears = Object.keys(allYearsData);
            dataToRender = aggregateData(allYears);
        } else if (selectedValue === "") {
            const latestYear = Object.keys(allYearsData).sort((a, b) => b - a)[0];
            dataToRender = aggregateData([latestYear]);
        }
        else {
            dataToRender = aggregateData([selectedValue]);
        }
        updateUI(dataToRender);
    });

    const initializeDashboard = () => {
        populateYearFilter();
        const latestYear = Object.keys(allYearsData).sort((a, b) => b - a)[0];
        const initialData = aggregateData([latestYear]);
        updateUI(initialData);
        yearSelect.value = latestYear;
    };

    initializeDashboard();

});