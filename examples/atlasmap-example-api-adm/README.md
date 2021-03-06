### AtlasMap runtime API with ADM archive file example

This is a small example of running AtlasMap mapping by interacting with runtime API directly. This example uses an ADM archive file to load a mapping definition from. It consumes `order.json` JSON file, process mapping and produce XML output. The output XML is simply printed in console. 

Compile and run an example:
```
../../mvnw clean package exec:java
```

Then generated XML output is printed in console:
```xml
Target Document:
<?xml version="1.0" encoding="UTF-8"?><ns:XmlOE xmlns:ns="http://atlasmap.io/xml/test/v2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ns:Address>
    <ns:addressLine1>1040 Notexisting St</ns:addressLine1>
    <ns:city>Westford</ns:city>
    <ns:state>Massachusetts</ns:state>
    <ns:zipCode>01886</ns:zipCode>
  </ns:Address>
  <ns:Contact>
    <ns:firstName>Bob</ns:firstName>
    <ns:lastName>Totton</ns:lastName>
    <ns:phoneNumber>123-456-7890</ns:phoneNumber>
    <ns:zipCode>01886</ns:zipCode>
  </ns:Contact>
  <ns:orderId>O001</ns:orderId>
</ns:XmlOE>
```
