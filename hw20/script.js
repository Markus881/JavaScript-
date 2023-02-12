function PublicService() {
    this.tariffs = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6,
    };
    this.meterReadings = [];
};

PublicService.prototype.addMeterReadings = function ({ serviceName, serviceVolume }) {
    let isServiceNameValid = false;
    let isServiceNameIncluded = false;
    this.meterReadings.find((indicator) => {
        if (Object.keys(indicator).join('') === serviceName) {
            return isServiceNameIncluded = true;
        };
    });
    if (isServiceNameIncluded) {
        throw new Error(`Service ${serviceName} is already included`);
    };
    for (tariff in this.tariffs) {
        if (serviceName === tariff) {
            isServiceNameValid = true;
            this.serviceName = serviceName;
            this.serviceVolume = serviceVolume;
            const temporaryData = {};
            temporaryData[serviceName] = serviceVolume;
            this.meterReadings.push(temporaryData);
            return;
        };
    };
    if (!isServiceNameValid) {
        throw new Error(`Service ${serviceName} is unavailble.`);
    };
};

PublicService.prototype.deleteMeterReadings = function ({ serviceName }) {
    this.meterReadings = this.meterReadings.filter((indicator) => Object.keys(indicator).join('') !== serviceName);
};

PublicService.prototype.getSum = function () {
    this.sum = 0;
    this.meterReadings.forEach((indicator) => {
        for (tariff in this.tariffs) {
            if (tariff === Object.keys(indicator).join('')) {
                let result = this.tariffs[tariff] * indicator[tariff];
                this.sum = this.sum + result;
            };
        };
    });
    return console.log('this.sum :>> ', this.sum);
};

const calculateService = new PublicService();

calculateService.addMeterReadings({
    serviceName: 'coldWater',
    serviceVolume: 200,
});
calculateService.addMeterReadings({
    serviceName: 'hotWater',
    serviceVolume: 100,
});
// calculateService.addMeterReadings({
//     serviceName: 'hotWater',
//     serviceVolume: 100,
// });
// calculateService.deleteMeterReadings({
//     serviceName: 'coldWater',
// });
// calculateService.addMeterReadings({
//     serviceName: 'banana',
//     serviceVolume: 150,
// });
calculateService.addMeterReadings({
    serviceName: 'gas',
    serviceVolume: 150,
});
calculateService.addMeterReadings({
    serviceName: 'electricity',
    serviceVolume: 300,
});
calculateService.getSum();