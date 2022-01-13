<template><h1 id="managing-device-data" tabindex="-1"><a class="header-anchor" href="#managing-device-data" aria-hidden="true">#</a> Managing device data</h1>
<h2 id="managing-properties" tabindex="-1"><a class="header-anchor" href="#managing-properties" aria-hidden="true">#</a> Managing Properties</h2>
<p>Each proprietary protocol model has its own properties, which can be used to store and display telemetry data. Initially it only contains system propertys which cannot be deleted, while custom model has no system property. Additionally, you can extend property if desired. <em>Please note: The data of created extended properties will be collected only if they have been configured and calculated in Flow.</em></p>
<h3 id="adding-new-extended-properties" tabindex="-1"><a class="header-anchor" href="#adding-new-extended-properties" aria-hidden="true">#</a> Adding new extended properties</h3>
<p>Select one of the models and enter <strong>Properties</strong> tab, let's take the <code>SampleModel01</code> model as an example. Then by clicking the <strong><u>+ Add Property</u></strong> button on the left side, an New Property form will be displayed on the right side.</p>
<p>Fill in the form and then click the <strong><u>Add</u></strong> button on the right side to add a new extended property. <em>Please note: The unit can be customized if desired.</em></p>
<p>For &quot;Advanced Settings&quot; field:</p>
<ul>
<li>Enable
<ul>
<li>If checked, the property will be displayed on the Platform and can be accessed via APIs.</li>
<li>If unchecked,  the property will not be displayed on the Platform and cannot be accessed via APIs.</li>
</ul>
</li>
<li>Store data in the data report
<ul>
<li>If checked, the property value will be stored and can be viewed in <strong>Reports</strong>.</li>
<li>If unchecked, the data will be processed in passthrough mechanism, that is, the property value will not be stored on the Platform and there will be no corresponding data in <strong>Reports</strong>.</li>
</ul>
</li>
</ul>
<p>After saving the property, it will be displayed in the <strong>Latest Received Report</strong> of <strong>Last Report</strong> tab in <strong>Devices</strong> for the <code>SampleModel01</code> model as shown below:</p>
<p>*Please note: The data of extended propertys will be generated only if they have been configured and computed in <strong>Flows</strong> in <strong>TMX Insight™</strong> Service. If more than an extended property is desired, follow the instructions above to add more extended propertys.</p>
<h3 id="editing-properties" tabindex="-1"><a class="header-anchor" href="#editing-properties" aria-hidden="true">#</a> Editing properties</h3>
<p>Click the specific property card which you are desired to edit. After the edition, click the <strong><u>Save</u></strong> button to save the changes. <em>Please note: &quot;Identifier&quot; and &quot;Type&quot; fields cannot be modified.</em></p>
<h2 id="managing-configurations" tabindex="-1"><a class="header-anchor" href="#managing-configurations" aria-hidden="true">#</a> Managing Configurations</h2>
<h3 id="adding-new-config-templates" tabindex="-1"><a class="header-anchor" href="#adding-new-config-templates" aria-hidden="true">#</a> Adding new config templates</h3>
<p>Select a device model, and click the <strong><u>+</u></strong> button in the Config Template list. An Add Config Template window will pop up.</p>
<ul>
<li>
<p>Default Model</p>
<p>Each device model has its own configuration parameter settings. Please refer to the <strong>Parameter Table</strong> in the corresponding device's <strong>ThingsMatrix Device Manual</strong> for further information.</p>
<p>Let's take device model <code>TMY07</code> as an example. Its own configuration consists of the following categories: &quot;Working Mode Option&quot;, &quot;Periodic Mode Settings&quot;, &quot;Storage Mode Settings&quot;, &quot;Motion Static Mode Settings&quot;, &quot;Schedule Mode Settings&quot;, &quot;Master Server Settings&quot;, &quot;Firmware&quot;. Within each parameter category, hovering your mouse over one of the parameters, an explanation will be displayed. Each parameter has a default value, users can modify the value based on requirements. A description can also be added if needed. After the configuration, click the <strong><u>Add</u></strong> button to add a new config template.</p>
</li>
<li>
<p>Custom Model</p>
<p>You can add a new config template by uploading a configuration file in JSON format. Enter the name and necessary description and then click the <strong><u>Save</u></strong> button to add a new config template.</p>
</li>
</ul>
<h3 id="editing-config-templates" tabindex="-1"><a class="header-anchor" href="#editing-config-templates" aria-hidden="true">#</a> Editing config templates</h3>
<p>Select a specific config template and then click the <strong><u>Edit</u></strong> button, an Edit Config Template window will pop up.</p>
<ul>
<li>
<p>Default Model</p>
<p>After changing the parameter values, click the <strong><u>Submit</u></strong> button to save all the changes. If the config template has already been applied to some groups, once the template is changed, the new configuration is proactively issued to the online devices in those groups and applied. For the offline devices within those groups, the new configuration will be issued and applied the next time the offline devices are connected to the Platform. The changes would be applied to all devices in those groups.</p>
</li>
<li>
<p>Custom Model</p>
<p>You can edit the config template by uploading a new configuration file in JSON format. After the edition, click the <strong><u>Submit</u></strong> button to save all the changes.</p>
</li>
</ul>
<h3 id="copying-config-templates" tabindex="-1"><a class="header-anchor" href="#copying-config-templates" aria-hidden="true">#</a> Copying config templates</h3>
<p>By selecting a specific template and then clicking the <strong><u>Copy</u></strong> button, a Copy Config Template window will pop up.</p>
<ul>
<li>
<p>Default Model</p>
<p>The new generated config template is exactly the same as the one you have chosen. Enter a new name and description for the new config template, then click the <strong><u>Copy</u></strong> button to create a config template. You can also edit the settings during the creation to apply some changes on the new configuration.</p>
</li>
<li>
<p>Custom Model</p>
<p>The config template is exactly the same as the one you have chosen. Enter a new name and description for the new configuration, then click the <strong><u>Copy</u></strong> button to create a config template. You can also create a new template by uploading a new configuration file in JSON format.</p>
</li>
</ul>
<h3 id="deleting-config-templates" tabindex="-1"><a class="header-anchor" href="#deleting-config-templates" aria-hidden="true">#</a> Deleting config templates</h3>
<p>Select a specific config template and then click the <strong><u>Delete</u></strong> button to delete the template. <em>Please note: A config template can only be deleted when it isn’t applied by any groups.</em></p>
<h2 id="managing-events" tabindex="-1"><a class="header-anchor" href="#managing-events" aria-hidden="true">#</a> Managing Events</h2>
<p>进入model详情页，管理events配置（新需求：物模型）</p>
<h2 id="operation-log" tabindex="-1"><a class="header-anchor" href="#operation-log" aria-hidden="true">#</a> Operation Log</h2>
<p>You can view the device's operation log, which records the operations made by the users or the system. To filter the operation(s), you can configure the time range, field name, description, operation type and operator.</p>
<h2 id="managing-commands" tabindex="-1"><a class="header-anchor" href="#managing-commands" aria-hidden="true">#</a> Managing Commands</h2>
<p>进入model详情页，管理commands配置（新需求：物模型加入commands）</p>
<h2 id="managing-certificates" tabindex="-1"><a class="header-anchor" href="#managing-certificates" aria-hidden="true">#</a> Managing Certificates</h2>
<p><strong>Certificates</strong> is used to uniformly manage the TLS certificates required by each network component. The Platform supports certificates in <code>.pem</code> format. You can configure the certificate and the server trust store to establish a secure connection between the devices and the Platform. Please click <a href="https://docs.thingsmatrix.io/server_certificate.crt" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> to download your server certificate.</p>
<h3 id="ca-certificates" tabindex="-1"><a class="header-anchor" href="#ca-certificates" aria-hidden="true">#</a> CA Certificates</h3>
<p>The CA Certificates page shows a list of CA certificates.
You can view all CA certificates, and also add, download and delete them.</p>
<p><em>Please note: The CA certificates associated with device certificates cannot be deleted.</em></p>
<h4 id="adding-new-ca-certificates" tabindex="-1"><a class="header-anchor" href="#adding-new-ca-certificates" aria-hidden="true">#</a> Adding new CA certificates</h4>
<p>By entering <strong>CA Certificates</strong> tab and then clicking the <strong><u>+ Add Certificate</u></strong> button, an Add CA Certificate window will pop up.</p>
<p>You can view the field description by hovering the mouse over its corresponding <strong><u>Information</u></strong> icon.</p>
<ul>
<li>
<p>For &quot;Registration Code&quot; field, you can copy the value to generate verification certificate.</p>
</li>
<li>
<p>For &quot;CA Certificate&quot; field, you can upload a private CA certificate.</p>
</li>
<li>
<p>For &quot;Verification Certificate&quot; field, you can upload a verification certificate created using the private key corresponding to this CA certificate to prove that you own it.</p>
<ul>
<li>
<p>Verification certificate supports files in the <code>.pem</code> format only.</p>
</li>
<li>
<p>We will introduce the steps in creating a verification certificate by using OpenSSL as an example:</p>
<ol>
<li>
<p>Generate a key pair of the private key's verification certificate.
The command to generate a key pair is as follows:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>openssl genrsa -out verificationCert.key 2048
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Use the value of &quot;Registration Code&quot; field above to create a Certificate Signing Request (CSR).</p>
<p>The command to create a CSR is as follows:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> openssl req -new -key verificationCert.key -out verificationCert.csr
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Copy the value of &quot;Registration Code&quot; field above and paste it as the value of  &quot;Common Name&quot; field below.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>……
Common Name (e.g. server FQDN or YOUR name) []: yourRegistrationCode****
……
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>Use the CSR signed by the private key of the CA certificate to create a verification certificate.</p>
<p>The command to generate a verification certificate is as follows:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>openssl x509 -req -in verificationCert.csr -CA yourCA.cer -CAkey yourPrivateKey.key -CAcreateserial -out verificationCert.crt -days 300 -sha512
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ol>
</li>
</ul>
</li>
</ul>
<h3 id="device-certificates" tabindex="-1"><a class="header-anchor" href="#device-certificates" aria-hidden="true">#</a> Device Certificates</h3>
<p>The Device Certificates page shows a list of device certificates.
You can view all device certificates, and also add, download and delete them.</p>
<p><em>Please note: A device certificate can only be deleted when it isn’t applied by any groups or devices.</em></p>
<h4 id="adding-new-deivce-certificates" tabindex="-1"><a class="header-anchor" href="#adding-new-deivce-certificates" aria-hidden="true">#</a> Adding new deivce certificates</h4>
<p>By entering <strong>Device certificates</strong> tab and then clicking the <strong><u>+ Add Certificate</u></strong> button, an Add Device Certificate window will pop up.</p>
<p>You can view the field description by hovering the mouse over its corresponding <strong><u>Information</u></strong> icon.</p>
<ul>
<li>For &quot;Device Certificate&quot; field, you can upload a device certificate.</li>
<li>For &quot;CA Certificate&quot; field, you can select an existed CA certificate to associate with.</li>
</ul>
</template>
