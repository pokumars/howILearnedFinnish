"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PillButton from "@/components/pillButton";
import { resources, resourceCategories, type ResourceCategory } from "@/data/resources";

const ResourcesClient = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "All">("All");

  const filteredResources = useMemo(() => {
    if (selectedCategory === "All") return resources;
    return resources.filter((r) => r.category === selectedCategory);
  }, [selectedCategory]);

  const allCategories = ["All", ...resourceCategories] as const;

  return (
    <>
      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter all resources:</h2>
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <PillButton
                key={cat}
                text={cat}
                onClick={() => setSelectedCategory(cat as ResourceCategory | "All")}
                activated={selectedCategory === cat}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resources list */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">
            {filteredResources.length} resource{filteredResources.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : " across all categories"}
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3"
              >
                <span className="inline-block text-xs font-medium bg-purple-100 text-purple-700 rounded-full px-3 py-1 w-fit">
                  {resource.category}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{resource.description}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-1">
                  {resource.mentions.map((mention, i) => (
                    <p key={i} className="text-xs text-gray-500">
                      Mentioned by{" "}
                      <span className="font-medium text-gray-700">{mention.personName}</span> in{" "}
                      <Link
                        href={`/episode/${mention.episodeId}`}
                        className="text-purple-600 hover:text-purple-800 font-medium hover:underline"
                      >
                        Episode {mention.episodeId}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesClient;
