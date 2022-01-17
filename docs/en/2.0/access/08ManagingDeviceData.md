# Managing device data

## Managing Properties

Each proprietary protocol model has its own properties, which can be used to store and display telemetry data. Initially it only contains system propertys which cannot be deleted, while custom model has no system property. Additionally, you can extend property if desired. *Please note: The data of created extended properties will be collected only if they have been configured and calculated in Flow.* 

### Adding new extended properties

Select one of the models and enter **Properties** tab, let's take the `SampleModel01` model as an example. Then by clicking the **<u>+ Add Property</u>** button on the left side, an New Property form will be displayed on the right side.



 Fill in the form and then click the **<u>Add</u>** button on the right side to add a new extended property. *Please note: The unit can be customized if desired.*



For "Advanced Settings" field:

- Enable
  - If checked, the property will be displayed on the Platform and can be accessed via APIs.
  - If unchecked,  the property will not be displayed on the Platform and cannot be accessed via APIs.
- Store data in the data report
  - If checked, the property value will be stored and can be viewed in **Reports**.
  - If unchecked, the data will be processed in passthrough mechanism, that is, the property value will not be stored on the Platform and there will be no corresponding data in **Reports**.



After saving the property, it will be displayed in the **Latest Received Report** of **Last Report** tab in **Devices** for the `SampleModel01` model as shown below:

*Please note: The data of extended propertys will be generated only if they have been configured and computed in **Flows** in **TMX Insight™** Service. If more than an extended property is desired, follow the instructions above to add more extended propertys.

### Editing properties

Click the specific property card which you are desired to edit. After the edition, click the **<u>Save</u>** button to save the changes. *Please note: "Identifier" and "Type" fields cannot be modified.*

## Managing Configurations

### Adding new config templates

Select a device model, and click the **<u>+</u>** button in the Config Template list. An Add Config Template window will pop up.

- Default Model

  Each device model has its own configuration parameter settings. Please refer to the **Parameter Table** in the corresponding device's **ThingsMatrix Device Manual** for further information.

  Let's take device model `TMY07` as an example. Its own configuration consists of the following categories: "Working Mode Option", "Periodic Mode Settings", "Storage Mode Settings", "Motion Static Mode Settings", "Schedule Mode Settings", "Master Server Settings", "Firmware". Within each parameter category, hovering your mouse over one of the parameters, an explanation will be displayed. Each parameter has a default value, users can modify the value based on requirements. A description can also be added if needed. After the configuration, click the **<u>Add</u>** button to add a new config template.

- Custom Model

  You can add a new config template by uploading a configuration file in JSON format. Enter the name and necessary description and then click the **<u>Save</u>** button to add a new config template.

### Editing config templates

Select a specific config template and then click the **<u>Edit</u>** button, an Edit Config Template window will pop up.

- Default Model

  After changing the parameter values, click the **<u>Submit</u>** button to save all the changes. If the config template has already been applied to some groups, once the template is changed, the new configuration is proactively issued to the online devices in those groups and applied. For the offline devices within those groups, the new configuration will be issued and applied the next time the offline devices are connected to the Platform. The changes would be applied to all devices in those groups.

- Custom Model

  You can edit the config template by uploading a new configuration file in JSON format. After the edition, click the **<u>Submit</u>** button to save all the changes.



### Copying config templates

By selecting a specific template and then clicking the **<u>Copy</u>** button, a Copy Config Template window will pop up.

- Default Model

  The new generated config template is exactly the same as the one you have chosen. Enter a new name and description for the new config template, then click the **<u>Copy</u>** button to create a config template. You can also edit the settings during the creation to apply some changes on the new configuration.

- Custom Model

  The config template is exactly the same as the one you have chosen. Enter a new name and description for the new configuration, then click the **<u>Copy</u>** button to create a config template. You can also create a new template by uploading a new configuration file in JSON format.



### Deleting config templates

Select a specific config template and then click the **<u>Delete</u>** button to delete the template. *Please note: A config template can only be deleted when it isn’t applied by any groups.*



## Managing Events

进入model详情页，管理events配置（新需求：物模型）





## Operation Log

You can view the device's operation log, which records the operations made by the users or the system. To filter the operation(s), you can configure the time range, field name, description, operation type and operator.

## Managing Commands

进入model详情页，管理commands配置（新需求：物模型加入commands）



## Managing Certificates

**Certificates** is used to uniformly manage the TLS certificates required by each network component. The Platform supports certificates in `.pem` format. You can configure the certificate and the server trust store to establish a secure connection between the devices and the Platform. Please click [here](https://docs.thingsmatrix.io/server_certificate.crt) to download your server certificate.

### CA Certificates

The CA Certificates page shows a list of CA certificates.
You can view all CA certificates, and also add, download and delete them.

*Please note: The CA certificates associated with device certificates cannot be deleted.*

#### Adding new CA certificates

By entering **CA Certificates** tab and then clicking the **<u>+ Add Certificate</u>** button, an Add CA Certificate window will pop up.

You can view the field description by hovering the mouse over its corresponding **<u>Information</u>** icon.

- For "Registration Code" field, you can copy the value to generate verification certificate.

- For "CA Certificate" field, you can upload a private CA certificate.

- For "Verification Certificate" field, you can upload a verification certificate created using the private key corresponding to this CA certificate to prove that you own it.

  - Verification certificate supports files in the `.pem` format only.

  - We will introduce the steps in creating a verification certificate by using OpenSSL as an example:

    

    1. Generate a key pair of the private key's verification certificate.
       The command to generate a key pair is as follows:

       ```
       openssl genrsa -out verificationCert.key 2048
       ```

       

    2. Use the value of "Registration Code" field above to create a Certificate Signing Request (CSR).

       The command to create a CSR is as follows:

       ```
        openssl req -new -key verificationCert.key -out verificationCert.csr
       ```

       Copy the value of "Registration Code" field above and paste it as the value of  "Common Name" field below.

       ```
       ……
       Common Name (e.g. server FQDN or YOUR name) []: yourRegistrationCode****
       ……
       ```

       

    3. Use the CSR signed by the private key of the CA certificate to create a verification certificate.

       The command to generate a verification certificate is as follows:

       ```
       openssl x509 -req -in verificationCert.csr -CA yourCA.cer -CAkey yourPrivateKey.key -CAcreateserial -out verificationCert.crt -days 300 -sha512
       ```



### Device Certificates

The Device Certificates page shows a list of device certificates.
You can view all device certificates, and also add, download and delete them.

*Please note: A device certificate can only be deleted when it isn’t applied by any groups or devices.*

#### Adding new deivce certificates

By entering **Device certificates** tab and then clicking the **<u>+ Add Certificate</u>** button, an Add Device Certificate window will pop up.

You can view the field description by hovering the mouse over its corresponding **<u>Information</u>** icon.

- For "Device Certificate" field, you can upload a device certificate.
- For "CA Certificate" field, you can select an existed CA certificate to associate with.