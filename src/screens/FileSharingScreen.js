import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Share from 'react-native-share';
import QRCodeScanner from 'react-native-qrcode-scanner';
import WiFiTransfer from 'react-native-wifi-transfer';

const FileSharingScreen = () => {
  const [filePath, setFilePath] = useState(null);

  const shareFile = () => {
    if (filePath) {
      const options = {
        type: 'application/pdf', // Change the MIME type according to the file type you want to share
        url: `file://${filePath}`,
      };
      Share.open(options)
        .then(() => console.log('File shared successfully'))
        .catch((error) => console.log('Error sharing file:', error));
    }
  };

  const onQRCodeScanned = (e) => {
    const { data } = e;
    setFilePath(data);
  };

  const startSharing = () => {
    WiFiTransfer.sendFile(filePath)
      .then(() => console.log('File shared successfully'))
      .catch((error) => console.log('Error sharing file:', error));
  };

  return (
    <View>
      {!filePath ? (
        <QRCodeScanner onRead={onQRCodeScanned} />
      ) : (
        <View>
          <Text>File selected: {filePath}</Text>
          <Button title="Share via QR Code" onPress={shareFile} />
          <Button title="Share via Wi-Fi" onPress={startSharing} />
        </View>
      )}
    </View>
  );
};

export default FileSharingScreen;
