import React, { FunctionComponent, useState } from "react";

import { Column, ColumnMapper, Columns, NodeRefProvider } from "../UI";
import {
  IMappingDocumentEvents,
  IMappingsColumnData,
  ISourceColumnCallbacks,
  ISourceMappingTargetLinksData,
  ISourceMappingTargetLinksEvents,
  ISourcesColumnData,
  ITargetsColumnData,
  ITargetsColumnCallbacks,
  MappingsColumn,
  SourceMappingTargetLinks,
  SourcesColumn,
  TargetsColumn,
} from "./ColumnMapperView";
import { IAtlasmapMapping } from "./models";

export interface ISourceMappingTargetViewProps
  extends ISourcesColumnData,
    IMappingsColumnData,
    ITargetsColumnData,
    ISourceMappingTargetLinksData {
  onSelectMapping: ISourceMappingTargetLinksEvents["onSelectMapping"];
  sourceEvents: ISourceColumnCallbacks;
  mappingEvents: IMappingDocumentEvents;
  targetEvents: ITargetsColumnCallbacks;
}

export const SourceMappingTargetView: FunctionComponent<ISourceMappingTargetViewProps> = ({
  sourceProperties,
  targetProperties,
  constants,
  sources,
  mappings,
  targets,
  showMappingPreview,
  showTypes,
  selectedMappingId,
  onSelectMapping,
  sourceEvents,
  mappingEvents,
  targetEvents,
}) => {
  const [highlightedMappingId, setHighlightedMappingId] = useState<
    string | undefined
  >();
  const handleMouseOver = (m: IAtlasmapMapping) =>
    setHighlightedMappingId(m.id);
  const handleMouseOut = () => setHighlightedMappingId(undefined);

  return (
    <ColumnMapper role={"main"}>
      <NodeRefProvider>
        <Columns>
          <Column data-testid={"column-source-area"} totalColumns={3}>
            <SourcesColumn
              sourceProperties={sourceProperties}
              constants={constants}
              sources={sources}
              showTypes={showTypes}
              {...sourceEvents}
            />
          </Column>
          <Column data-testid={"column-mappings-area"} totalColumns={3}>
            <MappingsColumn
              mappings={mappings}
              selectedMappingId={selectedMappingId}
              showMappingPreview={showMappingPreview}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              {...mappingEvents}
            />
          </Column>
          <Column data-testid={"column-target-area"} totalColumns={3}>
            <TargetsColumn
              targetProperties={targetProperties}
              showMappingPreview={showMappingPreview}
              showTypes={showTypes}
              targets={targets}
              {...targetEvents}
            />
          </Column>
        </Columns>
        <SourceMappingTargetLinks
          mappings={mappings}
          selectedMappingId={selectedMappingId}
          highlightedMappingId={highlightedMappingId}
          onSelectMapping={onSelectMapping}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </NodeRefProvider>
    </ColumnMapper>
  );
};
