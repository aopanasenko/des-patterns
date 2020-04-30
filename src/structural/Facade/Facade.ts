/**
 * Фасад
 */

/**
 * Пусть есть классы со сложной структурой, которые мы не можем упростить
 */
class VideoFile {};

class OggCompressionCodec {};

class MPEG4CompressionCoded {};

class AudioMixer {
    public fix(result: any) {
        return result;
    }
};

class FileClass {
    private newFile: any;

    constructor(newFile: any) {
        this.newFile = newFile;
    }
};

// Создадим фасад
export class VideoConverter {
    public convert(filename: string, format: string): FileClass {
        const file = new VideoFile();

        if (format === 'mp4') {
            const destinationCodec = new MPEG4CompressionCoded();
        } else {
            const destinationCodec = new OggCompressionCodec();
        }

        const result = (new AudioMixer()).fix(file);
        return new FileClass(result);
    }
}
